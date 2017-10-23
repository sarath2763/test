import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import {Todo} from '../todo';

@Injectable()
export class TodoService {

  constructor(private http: Http) { }
  
    getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
               .map(response => {
                 console.log(response)
                 return response.json()
               })

    }
    
  getTodosDetail(id){
    return this.http.get('https://jsonplaceholder.typicode.com/todos'+'?userId='+id)
               .map(response => {
                 console.log(response)
                 return response.json()
               })
  }


  lastId: number = 0;

  todos: Todo[] = [];

  addTodo(todo: Todo): TodoService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  deleteTodoById(id: number): TodoService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  toggleTodoComplete(todo: Todo) {
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
