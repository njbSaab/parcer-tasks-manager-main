const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "TaskLog",
  tableName: "task_logs",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    task_id: {
      type: "int",
      nullable: false,
    },
    status: {
      type: "enum",
      enum: ["успешно", "ошибка"],
    },
    message: {
      type: "text",
      nullable: true,
    },
    created_at: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
  },
  relations: {
    task: {
      type: "many-to-one",
      target: "Task",
      joinColumn: {
        name: "task_id",
        referencedColumnName: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
});