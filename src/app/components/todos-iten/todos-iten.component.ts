import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todos } from 'src/app/models/todoModel';
import { TodoService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-todos-iten',
  templateUrl: './todos-iten.component.html',
  styleUrls: ['./todos-iten.component.css']
})
export class TodosItenComponent implements OnInit {
@Input() todo: Todos
@Output() deleteTodo: EventEmitter<Todos> = new EventEmitter()
  constructor(private todoService: TodoService ) { }

  ngOnInit() {
  }

  setClasses() {
   let classes = {
     todo: true,
     'is-complete': this.todo.completed
   }
   return classes
  }

  onToggle(toTog) {
    this.todoService.toggleCompleted(toTog).subscribe(todo => console.log(todo))
    toTog.completed = !toTog.completed
  }

  onDelete(toDel) {
    this.deleteTodo.emit(toDel)
  }
}
