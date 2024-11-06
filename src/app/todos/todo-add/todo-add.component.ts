import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducer';
import * as actions from '../actions/todo.actions';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss',
})
export class TodoAddComponent {
  titleInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.titleInput = new FormControl('', Validators.required);
  }

  addTodoTask(): void {
    if (this.titleInput.valid) {
      this.store.dispatch(actions.createTodo({ title: this.titleInput.value }));
      this.titleInput.reset();
    }
  }
}
