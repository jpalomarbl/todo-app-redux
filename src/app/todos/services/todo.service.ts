import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoModule } from '../todo.module';
import { TodoDTO } from '../models/todo.dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<TodoDTO[]> {
    return Object.assign(this.http.get('/assets/todos.json'));
  }
}
