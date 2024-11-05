import { createAction, props } from "@ngrx/store";

export const createTodo = createAction(
  '[TODO] Create Todo',
  props<{ title: string }>()
);

export const editTitle = createAction(
  '[TODO] Edit title',
  props<{ title: string }>()
);

export const finishTodo = createAction(
  '[TODO] Finish Todo'
);

export const deleteTodo = createAction(
  '[TODO] Delete Todo'
);
