import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 
import { HttpModule } from '@angular/http';

import { DataTablesModule } from 'angular-datatables';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ViewTodosComponent } from './view-todos/view-todos.component';
import { HeaderComponent } from './shared/header/header.component';
import { UsersComponent } from './users/users.component';
import { TodoService } from './service/todo.service';

const APP_ROUTES: Routes = [
  {path:'', redirectTo:'users', pathMatch: 'prefix'},
  {path:'users', component:UsersComponent},
  {path:'todos', component:ViewTodosComponent}, 
  ]


@NgModule({
  declarations: [
    AppComponent,
    ViewTodosComponent,
    HeaderComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    DataTablesModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
