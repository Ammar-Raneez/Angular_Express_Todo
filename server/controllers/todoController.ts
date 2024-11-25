import { Request, Response } from "express";

import todoService from "../services/todoService";

/**
 * Represents a todo controller.
 */
class TodoController {
  /**
   * Creates a todo.
   *
   * If the creation fails, the error message is returned.
   *
   * @param req - The HTTP request object.
   * @param res - The HTTP response object.
   * @returns The created todo.
   */
  async createTodo(req: Request, res: Response): Promise<void> {
    try {
      const newTodo = await todoService.createTodo(req.body.title);
      res.status(201).json(newTodo);
    } catch (error: unknown) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  /**
   * Retrieves all the todos.
   *
   * If the creation fails, the error message is returned.
   *
   * @param _ - The HTTP request object.
   * @param res - The HTTP response object.
   * @returns All the available todos.
   */
  async getAllTodos(_: Request, res: Response): Promise<void> {
    try {
      const todos = await todoService.getAllTodos();
      res.json(todos);
    } catch (error: unknown) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  /**
   * Retrieves a specific todo.
   *
   * If the creation fails, the error message is returned.
   *
   * @param req - The HTTP request object.
   * @param res - The HTTP response object.
   * @returns The requested todo.
   */
  async getTodoById(req: Request, res: Response): Promise<void> {
    try {
      const todo = await todoService.getTodoById(req.params.id);
      if (!todo) res.status(404).json({ error: "To-do item not found" });
      res.json(todo);
    } catch (error: unknown) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  /**
   * Updates a specific todo.
   *
   * If the creation fails, the error message is returned.
   *
   * @param req - The HTTP request object.
   * @param res - The HTTP response object.
   * @returns The updated todo.
   */
  async updateTodo(req: Request, res: Response): Promise<void> {
    try {
      const updatedTodo = await todoService.updateTodo(req.params.id, req.body);
      res.json(updatedTodo);
    } catch (error: unknown) {
      res.status(404).json({ error: (error as Error).message });
    }
  }

  /**
   * Deletes a specific todo.
   *
   * If the creation fails, the error message is returned.
   *
   * @param req - The HTTP request object,
   * @param res - The HTTP response object.
   * @returns the deleted todo.
  */
  async deleteTodoById(req: Request, res: Response): Promise<void> {
    try {
      const deletedTodo = await todoService.deleteTodoById(req.params.id);
      res.json(deletedTodo);
    } catch (error: unknown) {
      res.status(404).json({ error: (error as Error).message });
    }
  }
}

export default new TodoController();
