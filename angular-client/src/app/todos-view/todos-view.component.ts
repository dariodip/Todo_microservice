import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todos-view',
  templateUrl: './todos-view.component.html',
  styleUrls: ['./todos-view.component.css']
})
export class TodosViewComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  getTodos(): void {
    this.todoService
      .getTodos()
      .then(todos => this.todos = todos)
  }

  ngOnInit() {
    this.getTodos()
  }

  deleteTodo(todo: Todo): void {
    console.log('delete');
  }
}
