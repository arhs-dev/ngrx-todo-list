import { Action } from '@ngrx/store';
import { Todo } from '../todo';

export const FETCH_TODOS = '[Todos] Fetch';
export const FETCH_TODOS_SUCCESS = '[Todos] Fetch success';
export const ADD_TODO = '[Todos] Add';
export const ADD_TODO_SUCCESS = '[Todos] Add success';
export const SET_DONE = '[Todos] Set done';
export const SET_UNDONE = '[Todos] Set undone';
export const UPDATE_TODO_SUCCESS = '[Todos] update success';

export class FetchTodos implements Action {
  readonly type = FETCH_TODOS;
}

export class FetchTodosSuccess implements Action {
  readonly type = FETCH_TODOS_SUCCESS;
  constructor(public todos: Todo[]) {}
}

export class AddTodo implements Action {
  readonly type = ADD_TODO;
  constructor(public task: string) {}
}

export class AddTodoSuccess implements Action {
  readonly type = ADD_TODO_SUCCESS;
  constructor(public todo: Todo) {}
}

export class SetDone implements Action {
  readonly type = SET_DONE;
  constructor(public id: string) {}
}

export class SetUndone implements Action {
  readonly type = SET_UNDONE;
  constructor(public id: string) {}
}

export class UpdateTodoSuccess implements Action {
  readonly type = UPDATE_TODO_SUCCESS;
  constructor(public todo: Todo) {}
}

export type TodoActions =
  | AddTodo
  | AddTodoSuccess
  | SetDone
  | SetUndone
  | UpdateTodoSuccess
  | FetchTodos
  | FetchTodosSuccess;
