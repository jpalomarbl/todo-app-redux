import { Action, createReducer, on } from '@ngrx/store';

import * as actions from '../actions/todo.actions';
import { TodoDTO } from '../models/todo.dto';

// export const initialState: TodoDTO[] = [new TodoDTO('Hola')];

export interface TodoState {
  todos: TodoDTO[];
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: TodoState = {
  todos: [new TodoDTO('Tarea 1')],
  loading: false,
  loaded: false,
  error: null,
};

const _todoReducer = createReducer(
  initialState,
  // on(actions.createTodo, (state, { title }) => [...state, new TodoDTO(title)]),
  on(actions.createTodo, (state, { title }) => ({
    ...state,
    loading: false,
    loaded: false,
    todos: [...state.todos, new TodoDTO(title)],
  })),
  on(actions.completeTodo, (state, { id }) => ({
    // return state.map((todo) => {
    //   if (todo.id === id) {
    //     return {
    //       ...todo,
    //       done: true,
    //     };
    //   } else {
    //     return todo;
    //   }
    // });

    ...state,
    loading: false,
    loaded: false,
    todos: [
      ...state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: true,
          };
        } else {
          return todo;
        }
      }),
    ],
  })),
  on(actions.editTitle, (state, { id, title }) => ({
    // return state.map((todo) => {
    //   if (todo.id === id) {
    //     return {
    //       ...todo,
    //       title: title,
    //     };
    //   } else {
    //     return todo;
    //   }
    // });

    ...state,
    loading: false,
    loaded: false,
    todos: [
      ...state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: title,
          };
        } else {
          return todo;
        }
      }),
    ],
  })),
  on(actions.deleteTodo, (state, { id }) => ({
    // return state.filter((todo) => todo.id !== id);

    ...state,
    loading: false,
    loaded: false,
    todos: [...state.todos.filter((todo) => todo.id !== id)],
  })),
  on(actions.getAll, (state) => ({ ...state, loading: true })),
  on(actions.getAllSuccess, (state, { todos }) => {
    console.log('Reducer ', todos);

    return {
    ...state,
    loading: false,
    loaded: true,
    todos: [...todos],
    };
  }),
  on(actions.getAllError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  }))
);

export function todoReducer(state: TodoState = initialState, action: Action) {
  return _todoReducer(state, action);
}
