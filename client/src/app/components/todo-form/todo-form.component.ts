import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss',
})
export class TodoFormComponent {
  title = '';

  constructor(private readonly todoService: TodoService) {}

  addTodo(): void {
    if (!this.title.trim()) return;

    this.todoService.addTodo(this.title);
    this.title = '';
  }
}
