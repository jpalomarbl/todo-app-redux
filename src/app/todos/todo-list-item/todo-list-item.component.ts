import { Component, Input, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';


import { TodoDTO } from '../models/todo.dto';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  inputs: ['todo'],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.scss'
})
export class TodoListItemComponent {
  @Input() todo!: TodoDTO

  titleInput!: FormControl;
  isEditing: boolean;

  constructor() {
    this.isEditing = false;
  }

  ngOnInit() {
    this.titleInput = new FormControl(this.todo.title, Validators.required);
  }

  completeTask(): void {

  }

  editTask(): void {
    this.isEditing = true;
  }

  deleteTask(): void {

  }

  submitTask(): void {
    this.isEditing = false;
  }
}
