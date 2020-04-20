import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../../todo';
import { getPendingTodos, getDoneTodos } from '../../store/todo.selectors';
import { Observable } from 'rxjs';
import * as todoActions from '../../store/todo.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  pendingTodos$: Observable<Todo[]>;
  doneTodos$: Observable<Todo[]>;
  newTodoTask = '';
  todosLimit = 10;
  buttonColor$: Observable<string>;

  constructor(private store: Store) {
    this.pendingTodos$ = this.store.select(getPendingTodos);
    this.doneTodos$ = this.store.select(getDoneTodos);
    this.buttonColor$ = this.store
      .select(getPendingTodos)
      .pipe(map(({ length }) => (length < this.todosLimit ? 'primary' : 'warn')));
  }

  ngOnInit(): void {
    this.store.dispatch(new todoActions.FetchTodos());
  }

  addTodo() {
    if (!this.newTodoTask) return;
    this.store.dispatch(new todoActions.AddTodo(this.newTodoTask));
    this.newTodoTask = '';
  }

  setDone(id: string) {
    this.store.dispatch(new todoActions.SetDone(id));
  }

  setUndone(id: string) {
    this.store.dispatch(new todoActions.SetUndone(id));
  }
}
