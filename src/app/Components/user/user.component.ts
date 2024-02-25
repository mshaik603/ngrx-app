import { Component, OnInit } from '@angular/core';
import { userModel } from 'src/app/Models/user-model';
import { UserService } from 'src/app/Services/user-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userList: userModel[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(
      (data: userModel[])=>{
          if(data){
            this.userList = data;
          }
      },
      (error: Error)=>{
        console.log(error);
      }
    );
  }

}
