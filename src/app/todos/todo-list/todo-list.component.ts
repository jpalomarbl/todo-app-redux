import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgFor, NgForOf } from '@angular/common';

import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { TodoDTO } from '../models/todo.dto';
import { TodoService } from '../services/todo.service';
import { AppState } from '../../app.reducer';
import * as actions from '../actions';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoListItemComponent, NgFor, NgForOf],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  todos: TodoDTO[];

  constructor(
    private store: Store<AppState>,
    private todoService: TodoService
  ) {
    this.todos = [];

    this.store.dispatch(actions.getAll());
  }

  ngOnInit(): void {
    // this.store.select('todos').subscribe( todos => this.todos = todos );
    // this.todoService.getAllTodos().subscribe((todos) => console.log(todos));

    this.store.select('todosApp').subscribe( todosResponse => this.todos = todosResponse.todos );
  }
}
