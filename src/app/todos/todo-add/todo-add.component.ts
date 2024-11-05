import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

import * as actions from '../todo.actions';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss'
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
