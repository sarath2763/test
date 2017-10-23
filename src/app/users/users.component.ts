import { Component, OnInit } from '@angular/core';
import { Router,Routes } from '@angular/router';
import { NgForm } from '@angular/forms' 
import { ActivatedRoute } from '@angular/router';

import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [];
  dtOptions: DataTables.Settings = {};
  UserId: number;
  todos;
  private sub: any;

  constructor(private todoservice: TodoService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.todoservice.getUsers()
                       .subscribe(
                         (_users: any) => {
                          this.users= _users;
                       });  
    this.dtOptions = {
      pagingType: 'full_numbers'
    }; 
    
      this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.UserId = +params['UserId'];

        console.log('Query param user: ', this.UserId);
      });

     this.todoservice.getTodosDetail(this.UserId)
                       .subscribe(
                         (_studentDetail: any) => {
                          this.todos= _studentDetail;
     });
  }
  
  
  showUser(userId) {
  this.router.navigate(['/todos'], { queryParams: { userId:this.UserId } });
  }
}
