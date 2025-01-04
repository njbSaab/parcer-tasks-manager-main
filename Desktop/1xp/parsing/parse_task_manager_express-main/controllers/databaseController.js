const AppDataSource = require("../config/database");

/**
 * Проверяет и инициализирует AppDataSource, если это необходимо.
 */
async function ensureDatabaseInitialized() {
  // Проверяем, инициализирован ли AppDataSource
  if (!AppDataSource || !AppDataSource.isInitialized) {
    console.log("Инициализация базы данных...");
    await AppDataSource.initialize();
    console.log("База данных успешно инициализирована.");
  }
}

module.exports = { ensureDatabaseInitialized };
