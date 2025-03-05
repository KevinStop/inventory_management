const MailService = require('./mailService');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const templates = require('./templates/emailTemplates');

class EmailService {
  static async sendNewRequestNotification(requestId) {
    try {
      const request = await prisma.request.findUnique({
        where: { requestId },
        include: {
          user: true,
          requestDetails: {
            include: {
              component: true
            }
          }
        }
      });

      const adminUsers = await prisma.user.findMany({
        where: { role: 'admin', isActive: true }
      });

      const adminEmails = adminUsers.map(admin => admin.email);
      
      // Preparar los componentes para la plantilla
      const components = request.requestDetails.map(detail => ({
        name: detail.component.name,
        quantity: detail.quantity
      }));
      
      await MailService.enviarCorreo(
        adminEmails,
        'Nueva Solicitud de Componentes',
        templates.newRequestTemplate({
          userName: request.user.name,
          userLastName: request.user.lastName || '', // Añadir apellido
          createdAt: request.createdAt,
          typeRequest: request.typeRequest,
          description: request.description,
          components: components // Añadir componentes
        })
      );
    } catch (error) {
      console.error('Error sending new request notification:', error);
      throw error;
    }
  }

  static async sendRequestApprovalNotification(requestId) {
    try {
      const request = await prisma.request.findUnique({
        where: { requestId },
        include: { 
          user: true,
          requestDetails: {
            include: {
              component: true
            }
          }
        }
      });

      // Preparar los componentes para la plantilla
      const components = request.requestDetails.map(detail => ({
        name: detail.component.name,
        quantity: detail.quantity
      }));

      await MailService.enviarCorreo(
        request.user.email,
        'Solicitud Aprobada',
        templates.approvedRequestTemplate({
          ...request,
          userName: request.user.name,
          userLastName: request.user.lastName || '', // Añadir apellido
          components: components // Añadir componentes
        })
      );
    } catch (error) {
      console.error('Error sending approval notification:', error);
      throw error;
    }
  }

  static async sendRequestRejectionNotification(requestId) {
    try {
      const request = await prisma.request.findUnique({
        where: { requestId },
        include: { 
          user: true,
          requestDetails: {
            include: {
              component: true
            }
          }
        }
      });

      // Preparar los componentes para la plantilla
      const components = request.requestDetails.map(detail => ({
        name: detail.component.name,
        quantity: detail.quantity
      }));

      await MailService.enviarCorreo(
        request.user.email,
        'Solicitud Rechazada',
        templates.rejectedRequestTemplate({
          ...request,
          userName: request.user.name,
          userLastName: request.user.lastName || '', // Añadir apellido
          components: components // Añadir componentes
        })
      );
    } catch (error) {
      console.error('Error sending rejection notification:', error);
      throw error;
    }
  }

  static async sendReturnDateNotification(requestId) {
    try {
      const request = await prisma.request.findUnique({
        where: { requestId },
        include: {
          user: true,
          requestDetails: {
            include: {
              component: true
            }
          }
        }
      });

      if (!request) throw new Error('Solicitud no encontrada');

      // Obtener admins para notificar
      const adminUsers = await prisma.user.findMany({
        where: { role: 'admin', isActive: true }
      });

      // Preparar los componentes para las plantillas
      const components = request.requestDetails.map(detail => ({
        name: detail.component.name,
        quantity: detail.quantity
      }));

      // Enviar correo al usuario
      await MailService.enviarCorreo(
        request.user.email,
        'Fecha de devolución de componentes',
        templates.returnDateTemplate({
          userName: request.user.name,
          userLastName: request.user.lastName || '', // Añadir apellido
          returnDate: request.returnDate,
          components: components
        })
      );

      // Enviar correo a los administradores
      const adminEmails = adminUsers.map(admin => admin.email);
      await MailService.enviarCorreo(
        adminEmails,
        'Notificación de fecha de devolución vencida',
        templates.adminReturnDateTemplate({
          userName: request.user.name,
          userLastName: request.user.lastName || '', // Añadir apellido
          userEmail: request.user.email,
          returnDate: request.returnDate,
          components: components
        })
      );
    } catch (error) {
      console.error('Error sending return date notification:', error);
      throw error;
    }
  }

  static async sendUpcomingReturnReminder(requestId) {
    try {
      const request = await prisma.request.findUnique({
        where: { requestId },
        include: {
          user: true,
          requestDetails: {
            include: {
              component: true
            }
          }
        }
      });

      if (!request) throw new Error('Solicitud no encontrada');

      // Solo enviar si hay al menos 3 días de diferencia entre creación y retorno
      const creationDate = new Date(request.createdAt);
      const returnDate = new Date(request.returnDate);
      const diffDays = Math.ceil((returnDate.getTime() - creationDate.getTime()) / (1000 * 60 * 60 * 24));

      if (diffDays >= 3) {
        // Preparar los componentes para la plantilla
        const components = request.requestDetails.map(detail => ({
          name: detail.component.name,
          quantity: detail.quantity
        }));

        await MailService.enviarCorreo(
          request.user.email,
          'Recordatorio: Próxima devolución de componentes',
          templates.upcomingReturnTemplate({
            userName: request.user.name,
            userLastName: request.user.lastName || '', // Añadir apellido
            returnDate: request.returnDate,
            components: components
          })
        );
      }
    } catch (error) {
      console.error('Error sending upcoming return reminder:', error);
      throw error;
    }
  }

  static async sendPasswordResetEmail(email, temporalPassword) {
    try {
      await MailService.enviarCorreo(
        email,
        'Recuperación de Contraseña',
        templates.passwordResetTemplate({
          temporalPassword
        })
      );
    } catch (error) {
      console.error('Error sending password reset email:', error);
      throw error;
    }
  }

  static async sendAccountVerificationEmail(userId, email, name, token) {
    try {
      const baseUrl = process.env.FRONTEND_URL || 'http://localhost:4200';
      const verificationUrl = `${baseUrl}/verify-account/${userId}/${token}`;
      const cancelUrl = `${baseUrl}/cancel-account/${userId}/${token}`;
      
      await MailService.enviarCorreo(
        email,
        'Verificación de cuenta - Sistema de Inventario',
        templates.accountVerificationTemplate({
          userName: name,
          verificationUrl,
          cancelUrl
        })
      );
    } catch (error) {
      console.error('Error sending account verification email:', error);
      throw error;
    }
  }
}

module.exports = EmailService;