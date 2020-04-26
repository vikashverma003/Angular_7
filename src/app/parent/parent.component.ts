import { Component, OnInit } from '@angular/core';
//import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  name="DANNNY";

  parent_data=[
    {name:'pcx', code:'1', category:'1'},
    {name:'pcxrt', code:'2', category:'1'},
    {name:'pcxq', code:'3', category:'1'},
    {name:'pcxr', code:'4', category:'1'},
    {name:'pcxt', code:'5', category:'1'}
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
