import { createAction, props } from '@ngrx/store';
import { TodoDTO } from '../models/todo.dto';

export const createTodo = createAction(
  '[TODO] Create Todo',
  props<{ title: string }>()
);

export const editTitle = createAction(
  '[TODO] Edit title',
  props<{ id: number; title: string }>()
);

export const completeTodo = createAction(
  '[TODO] Complete Todo',
  props<{ id: number }>()
);

export const deleteTodo = createAction(
  '[TODO] Delete Todo',
  props<{ id: number }>()
);

export const getAll = createAction('[TODOS] Get all TODOS');

export const getAllSuccess = createAction(
  '[TODOS] TODOS retrieved SUCCESSFULLY',
  props<{ todos: TodoDTO[] }>()
);

export const getAllError = createAction(
  '[TODOS] TODOS retrieved UNSUCCESSFULLY',
  props<{ payload: any }>()
);
