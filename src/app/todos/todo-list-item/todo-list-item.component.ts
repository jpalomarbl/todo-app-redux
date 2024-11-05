import { Component, Input, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgClass } from '@angular/common';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';


import { TodoDTO } from '../models/todo.dto';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [NgIf, NgClass, ReactiveFormsModule],
  inputs: ['todo'],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.scss'
})
export class TodoListItemComponent {
  @Input() todo!: TodoDTO

  titleInput!: FormControl;
  isEditing: boolean;

  constructor(private store: Store<AppState>) {
    this.isEditing = false;
  }

  ngOnInit() {
    this.titleInput = new FormControl(this.todo.title, Validators.required);
  }

  completeTask(): void {
    this.store.dispatch(actions.completeTodo({id: this.todo.id}));
  }

  editTask(): void {
    this.isEditing = true;
  }

  deleteTask(): void {
    this.store.dispatch(actions.deleteTodo({id: this.todo.id}));
  }

  submitTask(): void {
    this.isEditing = false;

    if (this.titleInput.valid && this.titleInput.value !== this.todo.title) {
      this.store.dispatch(actions.editTitle({id: this.todo.id, title: this.titleInput.value}));
    }
  }
}
