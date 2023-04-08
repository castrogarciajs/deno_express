import { Schema, model } from "npm:mongoose";

const Task = new Schema(
  {
    title: String,
    description: String,
    done: String,
  },
  {
    timestamps: true,
  }
);

export default model("Task", Task);