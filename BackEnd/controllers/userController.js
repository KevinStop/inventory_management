const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const EmailService = require("../src/mailer/emailService");
const { blacklistToken } = require("../middleware/blacklistedTokens");
const { generateToken, setTokenCookie } = require("../Utils/tokenUtils");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Crear un usuario (manual)
const registerUser = async (req, res) => {
  try {
    const userData = req.body;
    
    // Validar datos de entrada
    if (!userData.email || !userData.password || !userData.name) {
      return res.status(400).json({ 
        success: false, 
        message: 'Todos los campos obligatorios deben ser proporcionados' 
      });
    }
    
    // Crear usuario (ahora devuelve también el token)
    const { user, verificationToken } = await userModel.createUser(userData);
    
    // Enviar correo de verificación
    await EmailService.sendAccountVerificationEmail(
      user.userId, 
      user.email, 
      user.name, 
      verificationToken
    );
    
    res.status(201).json({
      success: true,
      message: 'Usuario registrado. Por favor, verifica tu correo electrónico para activar tu cuenta.',
      userId: user.userId
    });
  } catch (error) {
    console.error('Error en registro de usuario:', error.message);
    res.status(400).json({ 
      success: false, 
      message: error.message || 'Error al registrar el usuario' 
    });
  }
};

// Iniciar sesión (manual)
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.verifyUserCredentials(email, password);
    
    // Verificar si la cuenta está activa
    if (!user.isActive) {
      return res.status(401).json({ 
        success: false, 
        message: 'Tu cuenta aún no está activada. Por favor, verifica tu correo electrónico.' 
      });
    }

    const token = generateToken({
      userId: user.userId,
      email: user.email,
      role: user.role,
    });
    setTokenCookie(res, token);

    res.status(200).json({ user });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// Actualizar un usuario (solo el propio usuario o un admin)
const updateUser = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  if (req.user.userId !== Number(id) && req.user.role !== "admin") {
    return res
      .status(403)
      .json({ message: "No tienes permisos para realizar esta acción" });
  }

  try {
    if (req.file) {
      data.newImageUrl = `/uploads/users/${req.file.filename}`;
    }

    const updatedUser = await userModel.updateUser(id, data);

    res
      .status(200)
      .json({ message: "Usuario actualizado exitosamente", user: updatedUser });
  } catch (error) {
    console.error("Error al actualizar el usuario:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// Desactivar un usuario (solo el propio usuario o un admin)
const deactivateUser = async (req, res) => {
  const { id } = req.params;

  if (req.user.userId !== Number(id) && req.user.role !== "admin") {
    return res
      .status(403)
      .json({ message: "No tienes permisos para realizar esta acción" });
  }

  try {
    const user = await userModel.getUserById(id);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const deactivatedUser = await userModel.deactivateUser(id);
    res
      .status(200)
      .json({
        message: "Usuario desactivado exitosamente",
        user: deactivatedUser,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const logoutUser = (req, res) => {
  const token = req.cookies?.authToken;
  if (!token) {
    return res
      .status(400)
      .json({ message: "No se proporcionó un token para cerrar sesión" });
  }

  blacklistToken(token); 
  res.clearCookie("authToken"); 
  res.status(200).json({ message: "Sesión cerrada correctamente" });
};

const extendSession = (req, res) => {
  try {
    const token = req.cookies?.authToken;
    if (!token) {
      return res.status(401).json({ message: "Token no proporcionado" });
    }

    const user = jwt.verify(token, process.env.JWT_SECRET);

    const newToken = generateToken({
      userId: user.userId,
      email: user.email,
      role: user.role,
    });
    setTokenCookie(res, newToken);

    res.status(200).json({ message: "Sesión extendida exitosamente" });
  } catch (error) {
    console.error("Error al extender la sesión:", error);
    res.status(403).json({ message: "Token inválido o expirado" });
  }
};

const getAuthenticatedUser = async (req, res) => {
  try {
    const { userId } = req.user; 

    const user = await userModel.getUserById(userId);

    res.status(200).json(user);
  } catch (error) {
    console.error("Error al obtener el usuario autenticado:", error);
    res
      .status(500)
      .json({
        message: error.message || "Error al obtener la información del usuario",
      });
  }
};

const getSessionTime = (req, res) => {
  try {
    const token = req.cookies?.authToken;
    if (!token) {
      return res.status(401).json({ message: "Token no proporcionado." });
    }

    const decodedToken = jwt.decode(token);

    if (!decodedToken || !decodedToken.exp) {
      return res.status(400).json({ message: "Token inválido." });
    }

    const currentTime = Math.floor(Date.now() / 1000); 
    const remainingTime = (decodedToken.exp - currentTime) * 1000; 

    if (remainingTime <= 0) {
      return res.status(401).json({ message: "La sesión ha expirado." });
    }

    res.status(200).json({ remainingTime });
  } catch (error) {
    console.error("Error al obtener el tiempo restante de la sesión:", error);
    res.status(500).json({ message: "Error al procesar la solicitud." });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ 
        error: "Debe proporcionar un correo electrónico" 
      });
    }

    const { user, temporalPassword } = await userModel.requestPasswordReset(email);

    // Enviar correo con la contraseña temporal
    await EmailService.sendPasswordResetEmail(email, temporalPassword);

    res.status(200).json({
      message: "Se ha enviado un correo con las instrucciones para recuperar su contraseña"
    });

  } catch (error) {
    console.error("Error en requestPasswordReset:", error);
    res.status(error.message.includes("No existe ningún usuario") ? 404 : 500)
      .json({ error: error.message });
  }
};

// Verificar cuenta de usuario
const verifyUserAccount = async (req, res) => {
  try {
    const { userId, token } = req.params;
    
    // Buscar usuario por ID y token
    const user = await prisma.user.findFirst({
      where: {
        userId: parseInt(userId),
        verificationToken: token
      }
    });
    
    if (!user) {
      return res.status(400).json({ 
        success: false, 
        message: 'Enlace de verificación inválido o expirado.' 
      });
    }
    
    // Activar la cuenta del usuario
    await prisma.user.update({
      where: { userId: parseInt(userId) },
      data: { 
        isActive: true,
        verificationToken: null // Limpiar el token después de usarlo
      }
    });
    
    return res.status(200).json({ 
      success: true, 
      message: 'Cuenta verificada exitosamente. Ahora puedes iniciar sesión.' 
    });
  } catch (error) {
    console.error('Error al verificar la cuenta:', error.message);
    return res.status(500).json({ 
      success: false, 
      message: 'Error al verificar la cuenta. Por favor, intenta nuevamente.' 
    });
  }
};

// Cancelar cuenta de usuario
const cancelUserAccount = async (req, res) => {
  try {
    const { userId, token } = req.params;
    
    // Buscar usuario por ID y token
    const user = await prisma.user.findFirst({
      where: {
        userId: parseInt(userId),
        verificationToken: token
      }
    });
    
    if (!user) {
      return res.status(400).json({ 
        success: false, 
        message: 'Enlace de cancelación inválido o expirado.' 
      });
    }
    
    // Eliminar la cuenta de usuario
    await prisma.user.delete({
      where: { userId: parseInt(userId) }
    });
    
    return res.status(200).json({ 
      success: true, 
      message: 'Cuenta eliminada exitosamente.' 
    });
  } catch (error) {
    console.error('Error al cancelar la cuenta:', error.message);
    return res.status(500).json({ 
      success: false, 
      message: 'Error al cancelar la cuenta. Por favor, intenta nuevamente.' 
    });
  }
};

// userController.js
const resendVerificationEmail = async (req, res) => {
  try {
    const { email } = req.body;
    
    // Buscar el usuario
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        userId: true,
        email: true,
        name: true,
        isActive: true,
        verificationToken: true
      }
    });
    
    // Verificar si el usuario existe y necesita verificación
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'No se encontró ningún usuario con este correo electrónico'
      });
    }
    
    if (user.isActive) {
      return res.status(400).json({
        success: false,
        message: 'Esta cuenta ya está verificada'
      });
    }
    
    if (!user.verificationToken) {
      // Generar un nuevo token si no existe
      const verificationToken = generateVerificationToken();
      
      await prisma.user.update({
        where: { userId: user.userId },
        data: { verificationToken }
      });
      
      user.verificationToken = verificationToken;
    }
    
    // Enviar correo
    await EmailService.sendAccountVerificationEmail(
      user.userId,
      user.email,
      user.name,
      user.verificationToken
    );
    
    res.status(200).json({
      success: true,
      message: 'Correo de verificación reenviado exitosamente'
    });
  } catch (error) {
    console.error('Error al reenviar correo de verificación:', error);
    res.status(500).json({
      success: false,
      message: 'Error al reenviar el correo de verificación'
    });
  }
};

const updateUserTheme = async (req, res) => {
  try {
    const userId = Number(req.user.userId);
    const { theme } = req.body;
    
    if (!theme || (theme !== 'light' && theme !== 'dark')) {
      return res.status(400).json({ error: "El tema debe ser 'light' o 'dark'" });
    }
    
    const updatedUser = await userModel.updateUserTheme(userId, theme);
    
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error al actualizar el tema:", error);
    res.status(500).json({ error: error.message || "Error al actualizar el tema" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  updateUser,
  deactivateUser,
  logoutUser,
  extendSession,
  getAuthenticatedUser,
  getSessionTime,
  getAllUsers,
  requestPasswordReset,
  verifyUserAccount,
  cancelUserAccount,
  resendVerificationEmail,
  updateUserTheme
};
