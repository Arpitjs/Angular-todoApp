import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todos } from '../models/todoModel'

let getOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  constructor(private http:HttpClient) { }

  getTodos(): Observable<Todos[]> {
    return this.http.get<Todos[]>(`${this.todosUrl}${this.todosLimit}`)
  }

  toggleCompleted(to: Todos): Observable<any> {
    let todoId = `${this.todosUrl}/${to.id}`
    return this.http.put(todoId, to, getOptions)
  }

  deleteTodo(toDel: Todos): Observable<Todos> {
    let todoId = `${this.todosUrl}/${toDel.id}`
    return this.http.delete<Todos>(todoId, getOptions)
  }

  addTodo(todo: Todos): Observable<Todos> {
    return this.http.post<Todos>(this.todosUrl, todo, getOptions)
  }
}