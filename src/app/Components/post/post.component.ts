import { Component, OnInit } from '@angular/core';
import { PostService } from '../../Services/post-service.service';
import { PostModel } from '../../Models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  longText: string = 'Test';
  constructor(private postService: PostService) {}
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

}
