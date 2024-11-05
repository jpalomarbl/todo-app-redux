import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TodoModule } from './todos/todo.module';
// import { TodoListComponent } from './todos/todo-list/todo-list.component';
// import { TodoListItemComponent } from './todos/todo-list-item/todo-list-item.component';
// import { TodoAddComponent } from './todos/todo-add/todo-add.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoModule,
    // TodoListComponent,
    // TodoListItemComponent,
    // TodoAddComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-app';
}
