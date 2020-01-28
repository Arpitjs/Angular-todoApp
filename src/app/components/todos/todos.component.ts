import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo-service.service';
import { Todos } from '../../models/todoModel'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  title: string
  todos: Todos[] 
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todo => this.todos = todo)
  }

  deleteTodo(toDel) {
    this.todos = this.todos.filter(todo => todo.id !== toDel.id)
    this.todoService.deleteTodo(toDel).subscribe()
  }
  addTodo(todo: Todos) {
    this.todoService.addTodo(todo).subscribe(data => {
      console.log(todo)
      this.todos.push(data);
    })
  }
}






