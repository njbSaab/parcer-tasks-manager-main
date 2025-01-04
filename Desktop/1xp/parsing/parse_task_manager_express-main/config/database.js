const { DataSource } = require("typeorm");
const ormconfig = require("../ormconfig");

const AppDataSource = new DataSource(ormconfig);

AppDataSource.initialize()
  .then(() => {
    console.log("База данных подключена.");
    console.log("AppDataSource database:", AppDataSource);
    console.log(
      "AppDataSource.isInitialized database:",
      AppDataSource?.isInitialized
    );
  })
  .catch((error) => {
    console.error("Ошибка подключения к базе данных:", error.message);
  });
module.exports = AppDataSource;
