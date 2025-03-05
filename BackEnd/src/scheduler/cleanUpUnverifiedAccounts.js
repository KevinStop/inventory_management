const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function cleanupUnverifiedAccounts() {
  const testInterval = 5 * 60 * 1000;
  const oneDay = 24 * 60 * 60 * 1000; // 24 horas en milisegundos
  
  try {
    const cutoffDate = new Date(Date.now() - oneDay);
    
    // Encontrar y eliminar cuentas no verificadas creadas hace más de 24 horas
    const deletedAccounts = await prisma.user.deleteMany({
      where: {
        isActive: false,
        verificationToken: { not: null },
        createdAt: { lt: cutoffDate }
      }
    }); 
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = {
  cleanupUnverifiedAccounts
};