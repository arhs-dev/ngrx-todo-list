import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as actions from './todo.actions';
import { switchMap, map, mergeMap } from 'rxjs/operators';
import { TodosService } from '../services/todos.service';
import { of } from 'rxjs';
import { Todo } from '../todo';

@Injectable()
export class TodoEffects {
  fetchTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.FETCH_TODOS),
      switchMap(() =>
        this.todosService.fetchTodos().pipe(map((todos) => new actions.FetchTodosSuccess(todos))),
      ),
    ),
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.ADD_TODO),
      mergeMap(({ task }: actions.AddTodo) =>
        this.todosService.addTodo(task).pipe(map((todo) => new actions.AddTodoSuccess(todo))),
      ),
    ),
  );

  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.SET_DONE, actions.SET_UNDONE),
      mergeMap((action: actions.SetDone | actions.SetUndone) => {
        let isDone = action instanceof actions.SetDone ? true : false;

        return this.todosService
          .setTodoDone(action.id, isDone)
          .pipe(map((todo) => new actions.UpdateTodoSuccess(todo)));
      }),
    ),
  );

  constructor(private actions$: Actions, private todosService: TodosService) {}
}
