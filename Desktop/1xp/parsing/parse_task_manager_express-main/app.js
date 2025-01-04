const express = require("express");
const cors = require("cors");
const userRoutes = require("./api/routes/userRoutes");
const taskRoutes = require("./api/routes/taskRoutes");
const AppDataSource = require("./config/database"); 
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3082;

// Middleware
// app.use(cors({ origin: "http://localhost:5173" }));
app.use(cors({ origin: "*" })); // Для отладки
app.use(express.json());

// Подключение маршрутов
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

// Запуск сервера
AppDataSource.initialize()
  .then(() => {
    console.log("Connected to the database.");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .then(() => {
    console.log("Database initialization complete.");
  })
  .catch((error) =>
    console.error("Database initialization error:", error.message)
  );

process.on("SIGINT", () => {
  console.log("Закрытие сервера...");
  process.exit();
});

process.on("SIGTERM", () => {
  console.log("Закрытие сервера...");
  process.exit();
});
