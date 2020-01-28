import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodosItenComponent } from './components/todos-iten/todos-iten.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { HeaderswComponent } from './components/layout/headersw/headersw.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TodoService } from './services/todo-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import {AppRoutingModule } from '../app/app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosItenComponent,
    AddTodoComponent,
    HeaderswComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule    
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
