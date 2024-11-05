import { createAction, props } from "@ngrx/store";

export const createTodo = createAction(
  '[TODO] Create Todo',
  props<{ title: string }>()
);

export const editTitle = createAction(
  '[TODO] Edit title',
  props<{ id: number, title: string }>()
);

export const completeTodo = createAction(
  '[TODO] Complete Todo',
  props<{ id: number }>()
);

export const deleteTodo = createAction(
  '[TODO] Delete Todo',
  props<{ id: number }>()
);
