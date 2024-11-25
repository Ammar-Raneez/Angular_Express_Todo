import { Schema, model, Document } from "mongoose";

/**
 * Represents a Todo document.
 */
export interface ITodo extends Document {
  /**
   * The title of the todo.
   */
  title: string;

  /**
   * The completion status of the todo.
   */
  completed: boolean;
}

/**
 * Mongoose schema for a Todo item.
 */
const todoSchema = new Schema<ITodo>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

/**
 * Mongoose model for interacting with the "todos" collection.
 */
const Todo = model<ITodo>("Todo", todoSchema);

export default Todo;
