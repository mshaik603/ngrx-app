import { Component, OnInit } from '@angular/core';
import { PostService } from '../../Services/post-service.service';
import { PostModel } from '../../Models/post.model';
import { Store } from '@ngrx/store';
import { addToCart } from 'src/app/store/cart.action';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  longText: string = 'Test';
  constructor(private postService: PostService, private store: Store) {}
  postList: PostModel[] = [];
  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPost().subscribe((data: PostModel[]) => {
      if(data){
        console.log(data);
        this.postList = data;
      }
    });
  }
test(){
  console.log('test')
}
  addToCart(post:any){
    debugger;
    this.store.dispatch(addToCart(post));
  }
  removeFromCart(){
    // this.store.dispatch(removeFromCart({msg:'Item removed from cart'}));
  }

}
