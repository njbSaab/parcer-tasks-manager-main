// userController
const { AppDataSource } = require("../config/database");
const User = require("../models/userModel");

async function authorizeUser(telegramId) {
  const userRepo = AppDataSource.getRepository(User);

  if (!AppDataSource.isInitialized) {
    console.log("Инициализация базы данных...");
    await AppDataSource.initialize();
  }

  let user = await userRepo.findOne({ where: { telegram_id: telegramId } });

  if (!user) {
    user = userRepo.create({ telegram_id: telegramId });
    await userRepo.save(user);
  }

  return user;
}

module.exports = { authorizeUser };
