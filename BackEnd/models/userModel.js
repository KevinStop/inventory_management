const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const path = require("path");
const fs = require("fs");
const prisma = new PrismaClient();

// Crear un usuario
const createUser = async (data) => {
  try {
    if (!data.email || !data.password) {
      throw new Error("El email y la contraseña son obligatorios");
    }

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    if (!data.imageUrl) {
      data.imageUrl = "/assets/user.png";
    }

    delete data.confirmPassword;

    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
        name: data.name.toUpperCase(),
        lastName: data.lastName.toUpperCase(), 
        imageUrl: data.imageUrl,
        role: "user"
      },
    });

    return user;
  } catch (error) {
    if (error.code === "P2002") {
      throw new Error("El email ya está registrado");
    }
    console.error("Error al crear el usuario:", error);
    throw new Error(error.message || "Hubo un problema al crear el usuario");
  }
};

const verifyUserCredentials = async (email, password) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.password) {
      throw new Error("Usuario o contraseña incorrectos");
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new Error("Usuario o contraseña incorrectos");
    }

    return user;
  } catch (error) {
    throw new Error("Error en la verificación de credenciales");
  }
};

const updateUser = async (id, data) => {
  try {
    if (data.password) {
      if (data.password.length < 6) {
        throw new Error("La contraseña debe tener al menos 6 caracteres");
      }
      data.password = await bcrypt.hash(data.password, 10);
    }

    if (data.name) {
      data.name = data.name.toUpperCase();
    }
    if (data.lastName) {
      data.lastName = data.lastName.toUpperCase();
    }

    if (data.newImageUrl) {
      if (data.currentImageUrl) {
        const currentImagePath = path.join(
          __dirname,
          "..",
          "uploads/users",
          path.basename(data.currentImageUrl)
        );

        if (fs.existsSync(currentImagePath)) {
          fs.unlinkSync(currentImagePath);
        }
      }

      data.imageUrl = data.newImageUrl;
    }
    delete data.newImageUrl;
    delete data.currentImageUrl;

    const updatedUser = await prisma.user.update({
      where: { userId: Number(id) },
      data: data,
    });

    return updatedUser;
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    throw new Error(
      error.message || "Hubo un problema al actualizar el usuario"
    );
  }
};

// Desactivar un usuario por su ID
const deactivateUser = async (id) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { userId: Number(id) },
      data: { isActive: false },
    });
    return updatedUser;
  } catch (error) {
    throw new Error("Error al desactivar el usuario");
  }
};

const getUserById = async (id) => {
  try {
    const user = await prisma.user.findUnique({
      where: { userId: id },
      select: {
        userId: true,
        email: true,
        name: true,
        lastName: true,
        role: true,
        imageUrl: true,
      },
    });

    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    return user;
  } catch (error) {
    console.error("Error al obtener el usuario por ID:", error);
    throw new Error(error.message || "Hubo un problema al obtener el usuario");
  }
};

const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      where: {
        role: 'user',
        isActive: true
      },
      select: {
        userId: true,
        name: true,
        email: true,
        imageUrl: true
      }
    });
    return users;
  } catch (error) {
    throw new Error("Error al obtener usuarios");
  }
};

// Función para generar contraseña temporal aleatoria
const generateTemporalPassword = () => {
  const length = 10;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

// Función para procesar la solicitud de recuperación de contraseña
const requestPasswordReset = async (email) => {
  try {
    // Buscar el usuario por email
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        userId: true,
        email: true,
        name: true,
      }
    });

    if (!user) {
      throw new Error("No existe ningún usuario registrado con este correo electrónico");
    }

    // Generar contraseña temporal
    const temporalPassword = generateTemporalPassword();
    const hashedPassword = await bcrypt.hash(temporalPassword, 10);

    // Actualizar la contraseña del usuario
    await prisma.user.update({
      where: { userId: user.userId },
      data: { password: hashedPassword }
    });

    return {
      user,
      temporalPassword
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  updateUser,
  deactivateUser,
  verifyUserCredentials,
  getUserById,
  getAllUsers,
  requestPasswordReset
};
