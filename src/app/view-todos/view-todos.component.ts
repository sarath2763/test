import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Todo} from '../todo';
import { TodoService } from '../service/todo.service';


@Component({
  selector: 'app-view-todos',
  templateUrl: './view-todos.component.html',
  styleUrls: ['./view-todos.component.css']
})
export class ViewTodosComponent implements OnInit {

  newTodo: Todo = new Todo();

  constructor(private route: ActivatedRoute, private todoservice: TodoService) { }

  ngOnInit() {

  }
  
  addTodo() {
    this.todoservice.addTodo(this.newTodo)
                       .subscribe(
                          () => {
                             this.newTodo = new Todo();
                        });
  }

  toggleTodoComplete(todo) {
    this.todoservice.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoservice.deleteTodoById(todo.id).subscribe(
                          () => {});
  }

  get todos() {
    return this.todoservice.getAllTodos();
  }
  
}
