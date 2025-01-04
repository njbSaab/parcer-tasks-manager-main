const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    telegram_id: {
      type: "bigint",
      unique: true,
    },
    first_name: {
      type: "varchar",
      nullable: true,
    },
    last_name: {
      type: "varchar",
      nullable: true,
    },
    username: {
      type: "varchar",
      nullable: true,
    },
    languageCode: {
      type: "varchar",
      nullable: true,
    },
    createdAt: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
    updatedAt: {
      type: "timestamp",
      onUpdate: "CURRENT_TIMESTAMP",
      default: () => "CURRENT_TIMESTAMP",
    },
  },
});
