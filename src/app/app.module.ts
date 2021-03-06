import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddToDoInputComponent } from './add-todo-input/add-todo-input.component';
import { ToDoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddToDoInputComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
