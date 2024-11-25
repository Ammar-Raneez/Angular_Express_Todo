import Todo from "../models/Todo";

class TodoService {
  async createTodo(title: string) {
    if (!title) throw new Error("Title is required");

    const newTodo = new Todo({ title });
    return await newTodo.save();
  }

  async getAllTodos() {
    return await Todo.find();
  }

  async getTodoById(id: string) {
    return await Todo.findById(id);
  }

  async updateTodo(id: string, updates: any) {
    const updatedTodo = await Todo.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedTodo) throw new Error("To-do item not found");

    return updatedTodo;
  }

  async deleteTodoById(id: string) {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) throw new Error("To-do item not found");

    return deletedTodo;
  }
}

export default new TodoService();
