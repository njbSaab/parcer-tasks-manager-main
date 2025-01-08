const express = require("express");
const cors = require("cors");
const userRoutes = require("./api/routes/userRoutes");
const taskRoutes = require("./api/routes/taskRoutes");
const AppDataSource = require("./config/database");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3082;

// Middleware для CORS
app.use(
  cors({
    origin: "*", // Разрешаем все источники для тестов (можно заменить на конкретный домен)
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "ngrok-skip-browser-warning",
    ],
  })
);

// Middleware для JSON
app.use(express.json());

// Middleware для установки заголовков
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("ngrok-skip-browser-warning", "true"); // Устранение предупреждения ngrok
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self' 'unsafe-inline' https:;"
  );
  next();
});

// Middleware для логирования запросов
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
});

// Подключение маршрутов
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

// Запуск сервера
AppDataSource.initialize()
  .then(() => {
    console.log("Connected to the database.");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) =>
    console.error("Database initialization error:", error.message)
  );

// Обработка сигналов завершения
process.on("SIGINT", () => {
  console.log("Закрытие сервера...");
  process.exit();
});

process.on("SIGTERM", () => {
  console.log("Закрытие сервера...");
  process.exit();
});
