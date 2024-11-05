import { Action, createReducer, on } from "@ngrx/store";

import { TodoDTO } from "./models/todo.dto";
import * as actions from "./todo.actions";

export const initialState: TodoDTO[] = [];

const _todoReducer = createReducer(
  initialState,
  on(actions.createTodo, (state, { title }) => [...state, new TodoDTO(title)]),
  // on(actions.editTitle, (state, { title }) => {

  // })
);

export function todoReducer(state: TodoDTO[] = initialState, action: Action) {
  return _todoReducer(state, action);
}
