import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State as AppState } from '../../app.reducer';
import { State } from './todo.reducer';

export const getTodosSlice = createFeatureSelector<AppState, State>('todos');

export const getDoneTodos = createSelector(getTodosSlice, ({ entities }) =>
  entities.filter((todo) => todo.isDone),
);

export const getPendingTodos = createSelector(getTodosSlice, ({ entities }) =>
  entities.filter((todo) => !todo.isDone),
);
