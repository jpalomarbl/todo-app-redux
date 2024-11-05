import { Action, createReducer, on } from "@ngrx/store";

import { TodoDTO } from "./models/todo.dto";
import * as actions from "./todo.actions";

export const initialState: TodoDTO[] = [new TodoDTO('Hola')];

const _todoReducer = createReducer(
  initialState,
  on(actions.createTodo, (state, { title }) => [...state, new TodoDTO(title)]),
  on(actions.completeTodo, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: true
        };
      } else {
        return todo;
      }
    });
  }),
  on(actions.editTitle, (state, {id, title}) => {
    console.log("HOLA");
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: title
        };
      } else {
        return todo;
      }
    })
  }),
  on(actions.deleteTodo, (state, { id }) => {
    return state.filter((todo) => todo.id !== id);
  })
);

export function todoReducer(state: TodoDTO[] = initialState, action: Action) {
  return _todoReducer(state, action);
}
