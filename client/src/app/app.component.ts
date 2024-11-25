import { Component } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoListComponent, TodoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-angular';
}
