const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "TaskQueueLog",
  tableName: "task_queue_logs",
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
    next_run: {
      type: "timestamp",
      nullable: false,
    },
    last_run: {
      type: "timestamp",
      nullable: true,
    },
    status: {
      type: "enum",
      enum: ["ожидание", "выполняется", "ошибка"],
      default: "ожидание",
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
      onUpdate: "RESTRICT",
    },
  },
});
