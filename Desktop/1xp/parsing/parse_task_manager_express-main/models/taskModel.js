const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Task",
  tableName: "tasks",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    user_id: {
      type: "bigint",
      nullable: false,
    },
    name: {
      type: "varchar",
      nullable: false,
    },
    url: {
      type: "varchar",
      nullable: false,
    },
    content: {
      type: "varchar",
      nullable: false,
    },
    interval: {
      type: "varchar",
      nullable: false,
    },
    frequency: {
      type: "int",
      nullable: false,
    },
    period: {
      type: "varchar",
      nullable: false,
    },
    created_at: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
  },
});
