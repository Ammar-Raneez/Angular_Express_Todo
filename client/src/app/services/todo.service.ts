import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, signal } from '@angular/core';

import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private API_URL = 'http://localhost:3000/api/todos';
  private todosSignal = signal<Todo[]>([]);

  constructor(private http: HttpClient) {}

  get todos(): Signal<Todo[]> {
    return this.todosSignal;
  }

  loadTodos(): void {
    this.http.get<Todo[]>(this.API_URL).subscribe((todos) => {
      this.todosSignal.set(todos);
    });
  }

  addTodo(title: string): void {
    this.http.post<Todo>(this.API_URL, { title }).subscribe(() => {
      this.loadTodos();
    });
  }

  updateTodo(id: string, completed: boolean): void {
    this.http
      .put<Todo>(`${this.API_URL}/${id}`, { completed })
      .subscribe((updatedTodo) => {
        this.todosSignal.update((todos) =>
          todos.map((todo) =>
            todo._id === updatedTodo._id ? updatedTodo : todo,
          ),
        );
      });
  }

  deleteTodo(id: string): void {
    this.http.delete<void>(`${this.API_URL}/${id}`).subscribe(() => {
      this.todosSignal.update((todos) =>
        todos.filter((todo) => todo._id !== id),
      );
    });
  }
}
