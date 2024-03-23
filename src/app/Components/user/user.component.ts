import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { userModel } from 'src/app/Models/user-model';
import { UserService } from 'src/app/Services/user-service';
import { AppState } from 'src/app/store/app-state';
import { selectCart, selectCartQuantity } from 'src/app/store/cart-selector';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  cartQty:any;
  userList: userModel[] = [];
  constructor(private userService: UserService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.cartQty = this.store.select(selectCartQuantity);
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
