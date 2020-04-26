import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../service/blogpost.service';
import { Blogpost } from '../class/blogpost';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {
  posts: Blogpost[];

  blogpost = new Blogpost();

  error: string;

  showPostForm = false;

  constructor(private blogService:BlogpostService) { }

  ngOnInit(): void {
    
    this.blogService.getBlogPosts().subscribe(
      (data: Blogpost[]) => this.posts = data['msg'],
      error => this.error = error    
     
    );
    console.log("vvv",this.posts);
  }

  onSubmit() {
    this.showPostForm = false;
    return this.blogService.createPost(this.blogpost).subscribe(
        data => this.posts.push(data),
        error => this.error = error
      );
  }




}
