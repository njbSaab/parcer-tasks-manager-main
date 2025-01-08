// const { DataSource } = require("typeorm");
// const ormconfig = require("../ormconfig");

// const AppDataSource = new DataSource(ormconfig);

// AppDataSource.initialize()
//   .then(() => {
//     console.log("База данных подключена.");
//     console.log("AppDataSource database:", AppDataSource);
//     console.log(
//       "AppDataSource.isInitialized database:",
//       AppDataSource?.isInitialized
//     );
//   })
//   .catch((error) => {
//     console.error("Ошибка подключения к базе данных:", error.message);
//   });
// module.exports = AppDataSource;

const { DataSource } = require("typeorm");
const ormconfig = require("../ormconfig");

const AppDataSource = new DataSource(ormconfig);

AppDataSource.initialize()
  .then(async () => {
    console.log("База данных подключена.");

    const queryRunner = AppDataSource.createQueryRunner();
    const tableExists = await queryRunner.hasTable("task_queue_logs");

    if (!tableExists) {
      console.log("Creating table `task_queue_logs`...");
      await queryRunner.query(`
        CREATE TABLE task_queue_logs (
          id INT NOT NULL AUTO_INCREMENT,
          task_id INT NOT NULL,
          next_run TIMESTAMP NOT NULL,
          last_run TIMESTAMP NULL,
          status ENUM('ожидание', 'выполняется', 'ошибка') NOT NULL DEFAULT 'ожидание',
          PRIMARY KEY (id)
        ) ENGINE=InnoDB;
      `);
      console.log("Table `task_queue_logs` created.");
    } else {
      console.log("Table `task_queue_logs` already exists.");
    }

    await queryRunner.release();
    console.log("AppDataSource is ready.");
  })
  .catch((error) => {
    console.error("Ошибка подключения к базе данных:", error.message);
  });

module.exports = AppDataSource;
