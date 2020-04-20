import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  url = 'http://localhost:8001';
  constructor(private http: HttpClient) {}

  public fetchTodos() {
    return this.http.get<Todo[]>(`${this.url}/todos`);
  }

  public addTodo(task: string) {
    return this.http.post<Todo>(`${this.url}/todos`, { task });
  }
}
