const newRequestTemplate = (requestData) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px; background-color: #f9f9f9;">
      <div style="background-color: #4b70bd; padding: 15px; border-radius: 5px 5px 0 0;">
        <h2 style="color: white; margin: 0; text-align: center;">Nueva Solicitud de Componentes</h2>
      </div>
      <div style="padding: 20px; background-color: white; border-radius: 0 0 5px 5px;">
        <p style="margin-top: 0;">Se ha recibido una nueva solicitud con los siguientes detalles:</p>
        <ul style="padding-left: 20px;">
          <li style="margin-bottom: 8px;"><strong>Usuario:</strong> ${requestData.userName} ${requestData.userLastName || ''}</li>
          <li style="margin-bottom: 8px;"><strong>Fecha de solicitud:</strong> ${new Date(requestData.createdAt).toLocaleDateString()}</li>
          <li style="margin-bottom: 8px;"><strong>Tipo de solicitud:</strong> ${requestData.typeRequest}</li>
          <li style="margin-bottom: 8px;"><strong>Descripción:</strong> ${requestData.description || "No especificada"}</li>
        </ul>
        
        <div style="margin-top: 20px; background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
          <h3 style="margin-top: 0; color: #333;">Componentes solicitados:</h3>
          <ul style="padding-left: 20px;">
            ${requestData.components?.map(comp => `
              <li style="margin-bottom: 5px;">
                <strong>${comp.name}</strong> - Cantidad: ${comp.quantity}
              </li>
            `).join('') || '<li>No hay detalles de componentes disponibles</li>'}
          </ul>
        </div>
        
        <p style="margin-top: 20px;">Por favor, revise la solicitud en el sistema para su aprobación o rechazo.</p>
        
        <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #e0e0e0; text-align: center; color: #666; font-size: 14px;">
          Este es un mensaje automático del sistema de gestión de inventarios.
        </div>
      </div>
    </div>
  `;
};

const approvedRequestTemplate = (requestData) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px; background-color: #f9f9f9;">
      <div style="background-color: #4CAF50; padding: 15px; border-radius: 5px 5px 0 0;">
        <h2 style="color: white; margin: 0; text-align: center;">Solicitud Aprobada</h2>
      </div>
      <div style="padding: 20px; background-color: white; border-radius: 0 0 5px 5px;">
        <p style="margin-top: 0;">Estimado/a <strong>${requestData.userName} ${requestData.userLastName || ''}</strong>,</p>
        <p>Su solicitud ha sido aprobada con los siguientes detalles:</p>
        
        <ul style="padding-left: 20px;">
          <li style="margin-bottom: 8px;"><strong>Número de solicitud:</strong> ${requestData.requestId}</li>
          <li style="margin-bottom: 8px;"><strong>Fecha de aprobación:</strong> ${new Date().toLocaleDateString()}</li>
          <li style="margin-bottom: 8px;"><strong>Notas del administrador:</strong> ${requestData.adminNotes || "No hay notas adicionales"}</li>
        </ul>
        
        <div style="margin-top: 20px; background-color: #f0f7f0; padding: 15px; border-radius: 5px; border-left: 4px solid #4CAF50;">
          <h3 style="margin-top: 0; color: #2E7D32;">Componentes aprobados:</h3>
          <ul style="padding-left: 20px;">
            ${requestData.components?.map(comp => `
              <li style="margin-bottom: 5px;">
                <strong>${comp.name}</strong> - Cantidad: ${comp.quantity}
              </li>
            `).join('') || '<li>No hay detalles de componentes disponibles</li>'}
          </ul>
        </div>
        
        <p style="margin-top: 20px;">Puede proceder a retirar los componentes solicitados.</p>
        
        <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #e0e0e0; text-align: center; color: #666; font-size: 14px;">
          Este es un mensaje automático del sistema de gestión de inventarios.
        </div>
      </div>
    </div>
  `;
};

const rejectedRequestTemplate = (requestData) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px; background-color: #f9f9f9;">
      <div style="background-color: #F44336; padding: 15px; border-radius: 5px 5px 0 0;">
        <h2 style="color: white; margin: 0; text-align: center;">Solicitud Rechazada</h2>
      </div>
      <div style="padding: 20px; background-color: white; border-radius: 0 0 5px 5px;">
        <p style="margin-top: 0;">Estimado/a <strong>${requestData.userName} ${requestData.userLastName || ''}</strong>,</p>
        <p>Lamentamos informarle que su solicitud ha sido rechazada.</p>
        
        <ul style="padding-left: 20px;">
          <li style="margin-bottom: 8px;"><strong>Número de solicitud:</strong> ${requestData.requestId}</li>
          <li style="margin-bottom: 8px;"><strong>Fecha de rechazo:</strong> ${new Date().toLocaleDateString()}</li>
          <li style="margin-bottom: 8px;"><strong>Motivo:</strong> ${requestData.adminNotes || "No especificado"}</li>
        </ul>
        
        <div style="margin-top: 20px; background-color: #feefef; padding: 15px; border-radius: 5px; border-left: 4px solid #F44336;">
          <h3 style="margin-top: 0; color: #C62828;">Componentes solicitados (no aprobados):</h3>
          <ul style="padding-left: 20px;">
            ${requestData.components?.map(comp => `
              <li style="margin-bottom: 5px;">
                <strong>${comp.name}</strong> - Cantidad: ${comp.quantity}
              </li>
            `).join('') || '<li>No hay detalles de componentes disponibles</li>'}
          </ul>
        </div>
        
        <p style="margin-top: 20px;">Si tiene alguna pregunta, por favor contacte al administrador del sistema.</p>
        
        <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #e0e0e0; text-align: center; color: #666; font-size: 14px;">
          Este es un mensaje automático del sistema de gestión de inventarios.
        </div>
      </div>
    </div>
  `;
};

const returnDateTemplate = (data) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px; background-color: #f9f9f9;">
    <div style="background-color: #FF9800; padding: 15px; border-radius: 5px 5px 0 0;">
      <h2 style="color: white; margin: 0; text-align: center;">Fecha de devolución cumplida</h2>
    </div>
    <div style="padding: 20px; background-color: white; border-radius: 0 0 5px 5px;">
      <p style="margin-top: 0;">Estimado/a <strong>${data.userName} ${data.userLastName || ''}</strong>,</p>
      
      <p>Le recordamos que hoy es la fecha establecida para la devolución de los siguientes componentes:</p>
      
      <div style="background-color: #fff8e1; padding: 15px; border-radius: 5px; border-left: 4px solid #FF9800;">
        <ul style="padding-left: 20px; margin: 0;">
          ${data.components.map(comp => `
            <li style="margin-bottom: 5px;">
              <strong>${comp.name}</strong> - Cantidad: ${comp.quantity}
            </li>
          `).join('')}
        </ul>
      </div>
      
      <p style="margin-top: 20px;"><strong>Fecha de devolución:</strong> ${new Date(data.returnDate).toLocaleDateString()}</p>
      
      <p style="margin-top: 20px; font-weight: bold;">Por favor, realice la devolución lo antes posible para evitar inconvenientes.</p>
      
      <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #e0e0e0; text-align: center; color: #666; font-size: 14px;">
        Este es un mensaje automático del sistema de gestión de inventarios.
      </div>
    </div>
  </div>
`;

const adminReturnDateTemplate = (data) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px; background-color: #f9f9f9;">
    <div style="background-color: #03A9F4; padding: 15px; border-radius: 5px 5px 0 0;">
      <h2 style="color: white; margin: 0; text-align: center;">Notificación de fecha de devolución</h2>
    </div>
    <div style="padding: 20px; background-color: white; border-radius: 0 0 5px 5px;">
      <p style="margin-top: 0;">Se ha cumplido la fecha de devolución para los siguientes componentes:</p>
      
      <div style="background-color: #f0f8ff; padding: 15px; border-radius: 5px; margin: 15px 0;">
        <p style="margin-top: 0;"><strong>Usuario:</strong> ${data.userName} ${data.userLastName || ''} (${data.userEmail})</p>
        <div style="background-color: #e1f5fe; padding: 10px; border-radius: 5px; margin-top: 10px;">
          <p style="margin: 0 0 10px 0; font-weight: bold;">Componentes pendientes de devolución:</p>
          <ul style="padding-left: 20px; margin: 0;">
            ${data.components.map(comp => `
              <li style="margin-bottom: 5px;">
                <strong>${comp.name}</strong> - Cantidad: ${comp.quantity}
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
      
      <p><strong>Fecha de devolución:</strong> ${new Date(data.returnDate).toLocaleDateString()}</p>
      
      <p style="margin-top: 20px; color: #D32F2F; font-weight: bold;">Se requiere seguimiento para asegurar la devolución de estos componentes.</p>
      
      <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #e0e0e0; text-align: center; color: #666; font-size: 14px;">
        Este es un mensaje automático del sistema de gestión de inventarios.
      </div>
    </div>
  </div>
`;

const upcomingReturnTemplate = (data) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px; background-color: #f9f9f9;">
    <div style="background-color: #607D8B; padding: 15px; border-radius: 5px 5px 0 0;">
      <h2 style="color: white; margin: 0; text-align: center;">Recordatorio de próxima devolución</h2>
    </div>
    <div style="padding: 20px; background-color: white; border-radius: 0 0 5px 5px;">
      <p style="margin-top: 0;">Estimado/a <strong>${data.userName} ${data.userLastName || ''}</strong>,</p>
      
      <p>Le recordamos que <strong>mañana</strong> vence el plazo para la devolución de los siguientes componentes:</p>
      
      <div style="background-color: #eceff1; padding: 15px; border-radius: 5px; border-left: 4px solid #607D8B;">
        <ul style="padding-left: 20px; margin: 0;">
          ${data.components.map(comp => `
            <li style="margin-bottom: 5px;">
              <strong>${comp.name}</strong> - Cantidad: ${comp.quantity}
            </li>
          `).join('')}
        </ul>
      </div>
      
      <p style="margin-top: 20px;"><strong>Fecha de devolución:</strong> ${new Date(data.returnDate).toLocaleDateString()}</p>
      
      <p style="margin-top: 20px;">Por favor, asegúrese de realizar la devolución en la fecha acordada para evitar inconvenientes futuros.</p>
      
      <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #e0e0e0; text-align: center; color: #666; font-size: 14px;">
        Este es un mensaje automático del sistema de gestión de inventarios.
      </div>
    </div>
  </div>
`;

const passwordResetTemplate = (data) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px; background-color: #f9f9f9;">
    <div style="background-color: #9C27B0; padding: 15px; border-radius: 5px 5px 0 0;">
      <h2 style="color: white; margin: 0; text-align: center;">Recuperación de Contraseña</h2>
    </div>
    <div style="padding: 20px; background-color: white; border-radius: 0 0 5px 5px;">
      <p style="margin-top: 0;">Estimado/a usuario,</p>
      
      <p>Se ha generado una contraseña temporal para su cuenta:</p>
      
      <div style="background-color: #f3e5f5; padding: 20px; border-radius: 5px; margin: 20px 0; text-align: center;">
        <p style="background-color: #e1bee7; padding: 15px; font-family: monospace; font-size: 18px; font-weight: bold; margin: 0; border-radius: 3px; letter-spacing: 1px;">
          ${data.temporalPassword}
        </p>
      </div>
      
      <div style="background-color: #fff; border-left: 4px solid #9C27B0; padding: 15px; margin: 20px 0;">
        <p style="margin: 0;"><strong>Importante:</strong> Por seguridad, esta contraseña temporal tiene una validez limitada. 
        Por favor, use esta contraseña temporal para iniciar sesión y cambiar su contraseña lo antes posible.</p>
      </div>
      
      <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #e0e0e0; text-align: center; color: #666; font-size: 14px;">
        Este es un mensaje automático del sistema de gestión de inventarios.
        <p>Si usted no solicitó este cambio de contraseña, por favor contacte al administrador inmediatamente.</p>
      </div>
    </div>
  </div>
`;

const accountVerificationTemplate = (data) => `
  <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 5px;">
    <h2 style="color: #333;">Verificación de cuenta</h2>
    <p>Estimado/a ${data.userName},</p>
    <p>Gracias por registrarte en nuestro sistema de gestión de inventarios. Para completar tu registro y activar tu cuenta, por favor haz clic en el siguiente botón:</p>
    
    <div style="text-align: center; margin: 30px 0;">
      <a href="${data.verificationUrl}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;">Activar mi cuenta</a>
    </div>
    
    <p>Si no has solicitado esta cuenta o no reconoces esta solicitud, puedes ignorar este correo o hacer clic en el siguiente enlace para eliminar la cuenta:</p>
    
    <div style="text-align: center; margin: 20px 0;">
      <a href="${data.cancelUrl}" style="background-color: #f44336; color: white; padding: 10px 15px; text-decoration: none; border-radius: 4px;">No he solicitado esta cuenta</a>
    </div>
    
    <p style="font-size: 12px; color: #777; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
      Este enlace expirará en 24 horas. Si no activas tu cuenta en este tiempo, necesitarás registrarte nuevamente.
    </p>
  </div>
`;

module.exports = {
  newRequestTemplate,
  approvedRequestTemplate,
  rejectedRequestTemplate,
  returnDateTemplate,
  adminReturnDateTemplate,
  upcomingReturnTemplate,
  passwordResetTemplate,
  accountVerificationTemplate
};
