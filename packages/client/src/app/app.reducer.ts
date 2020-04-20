import { combineReducers, createFeatureSelector } from '@ngrx/store';
import { todoReducer } from './todos/store/todo.reducer';
import * as fromTodos from './todos/store/todo.reducer';

export interface State {
  todos: fromTodos.State;
}

export const appReducer = (state: any, action: any) => {
  return combineReducers({ todos: todoReducer })(state, action);
};
