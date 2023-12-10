import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent {
  listuser:User[] = [];
  constructor(private userservice:UserService,private route:Router) {
  }
  ngOnInit() {
    this.userservice.getAllUser().subscribe(
      (data: any) => {
        this.listuser = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite :', error);
      }
    );
  }



navigateToAddUser() {
  this.route.navigate(['/user/adduser']);
}}
