import Todo from "../models/Todo";

/**
 * Represents a todo service.
 */
class TodoService {
  /**
   * Creates a todo.
   *
   * Throws an error, if the title parameter is missing.
   *
   * @param title - The todo title.
   * @returns The created todo.
   * @throws Will throw an error if the title is missing.
   */
  async createTodo(title: string) {
    if (!title) throw new Error("Title is required");

    const newTodo = new Todo({ title });
    return await newTodo.save();
  }

  /**
   * Retrieves all the todos.
   *
   * @returns All the todos.
   */
  async getAllTodos() {
    return await Todo.find();
  }

  /**
   * Retrieves a specific todo.
   *
   * @param id - The ID of the todo to retrieve.
   * @returns The specific todo.
   */
  async getTodoById(id: string) {
    return await Todo.findById(id);
  }

  /**
   * Updates a specific todo.
   *
   * @param id - The ID of the todo to update.
   * @param updates - The new content to update the todo with.
   * @throws Will throw an error if the specific todo is not found.
   * @returns The updated todo.
   */
  async updateTodo(id: string, updates: any) {
    const updatedTodo = await Todo.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedTodo) throw new Error("To-do item not found");

    return updatedTodo;
  }

  /**
   * Deletes a specific todo.
   *
   * @param id - The ID of the todo to deletes.
   * @throws Will throw an error if the specific todo is not found.
   * @returns The deleted todo.
   */
  async deleteTodoById(id: string) {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) throw new Error("To-do item not found");

    return deletedTodo;
  }
}

export default new TodoService();
