import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgFor, NgForOf } from '@angular/common';

import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { TodoDTO } from '../models/todo.dto';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoListItemComponent, NgFor, NgForOf],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  todos: TodoDTO[];

  constructor(private store: Store<AppState>) {
    this.todos = [];
  }

  ngOnInit(): void {
    this.store.select('todos').subscribe( todos => this.todos = todos );
  }
}
