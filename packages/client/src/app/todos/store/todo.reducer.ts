import * as todo from './todo.actions';
import { Todo } from '../todo';

export interface State {
  entities: Todo[];
}

export const initState: State = {
  entities: [],
};

export const todoReducer = (state = initState, action: todo.TodoActions): State => {
  switch (action.type) {
    case todo.FETCH_TODOS_SUCCESS: {
      return {
        entities: action.todos,
      };
    }

    case todo.ADD_TODO_SUCCESS: {
      const newTodos = [...state.entities, action.todo];

      return {
        entities: newTodos,
      };
    }

    case todo.SET_DONE: {
      const newTodos = state.entities.map((todo) => {
        if (todo.id === action.id)
          return {
            ...todo,
            isDone: true,
          };
        else return todo;
      });

      return {
        entities: newTodos,
      };
    }

    case todo.SET_UNDONE: {
      const newTodos = state.entities.map((todo) => {
        if (todo.id === action.id)
          return {
            ...todo,
            isDone: false,
          };
        else return todo;
      });

      return {
        entities: newTodos,
      };
    }
    default:
      return state;
  }
};
