const express = require("express");
const router = express.Router();
const {
  ensureDatabaseInitialized,
} = require("../../controllers/databaseController");
const AppDataSource = require("../../config/database");
const User = require("../../models/userModel");

router.post("/save", async (req, res) => {
  const userData = req.body;

  if (!userData || !userData.id) {
    console.error("Недостаточно данных для сохранения пользователя.");
    return res.status(400).json({ error: "Недостаточно данных" });
  }

  try {
    await ensureDatabaseInitialized(); // Проверяем и инициализируем базу данных

    const userRepo = AppDataSource.getRepository(User);
    let user = await userRepo.findOne({ where: { telegram_id: userData.id } });
    if (!user) {
      user = userRepo.create({
        telegram_id: userData.id,
        first_name: userData.first_name,
        last_name: userData.last_name,
        username: userData.username,
        languageCode: userData.language_code,
      });
    } else {
      user.first_name = userData.first_name;
      user.last_name = userData.last_name;
      user.username = userData.username;
      user.languageCode = userData.language_code;
    }

    await userRepo.save(user);
    console.log("Пользователь успешно сохранен:", user);

    res.json({ success: true, user });
  } catch (error) {
    console.error("Ошибка при сохранении пользователя:", error.message);
    res.status(500).json({ error: "Ошибка сервера" });
  }
});

module.exports = router;
