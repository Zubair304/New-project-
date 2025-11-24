const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true
  },
  description: String,
  completed: {
    type: Boolean,
    default: false // New tasks are incomplete by default
  }
});

module.exports = mongoose.model("Task", TaskSchema);
