import { Component, effect, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private readonly todoService: TodoService) {
    effect(() => {
      this.todos = this.todoService.todos();
    });
  }

  ngOnInit(): void {
    this.todoService.loadTodos();
  }

  toggleTodo(todo: Todo): void {
    this.todoService.updateTodo(todo._id, !todo.completed);
  }

  deleteTodo(id: string): void {
    this.todoService.deleteTodo(id);
  }
}
