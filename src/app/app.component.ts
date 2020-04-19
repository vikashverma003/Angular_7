import { Component } from '@angular/core';
import {freeApiService} from '../Services/freeApiService';

import {Comments} from '../classes/Comments';
import {Posts} from '../classes/Posts';
import { ListComponent } from './product/list/list.component';

@Component({
  selector: 'app-root',
 // template:'<app-list></app-list>'
  templateUrl: './crud/apppy.component.html',
   //templateUrl: '../Template/temp.component.html',

  //template:'lets make another compo and new {{title}}',
 // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private freeapiSevice:freeApiService)
  {

  }
  lstcomments:Comments[];
  lstposts:Posts[];
  objPosts:Posts;

  ngOnInit(){

    this.freeapiSevice.getComments()
    .subscribe(data=>{this.lstcomments=data})

    this.freeapiSevice.getCommentsByParameter()
    .subscribe(data=>{this.lstposts=data})

    var oposts= new Posts();
    oposts.body="test body";
    oposts.title="test body";
    oposts.userId=99;
    this.freeapiSevice.post(oposts)
    .subscribe(data=>{this.objPosts=data})

  }


  //title = 'my-dream-app';
}
