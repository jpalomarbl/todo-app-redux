import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { take } from 'rxjs';

import * as actions from '../actions';
import { TodoService } from '../services/todo.service';

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  getTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getAll),
      take(1),
      mergeMap(() =>
        this.todoService.getAllTodos().pipe(
          map((todos) => {
            console.log('Effect ', todos);
            return actions.getAllSuccess({ todos: todos })
          }),
          catchError((err) => of(actions.getAllError({ payload: err })))
        )
      )
    )
  );
}
