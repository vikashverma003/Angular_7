import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap } from '@angular/router'

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  
  public selectedId;
  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    /* this routing implementaion for the reading the id from the url for checking the optional id from the url . when
    
    we come back from the next page 
    */
   this.route.paramMap.subscribe((params: ParamMap) => {
    let id = parseInt(params.get('id'));
    this.selectedId = id;
    console.log("selectedId", this.selectedId)
  });
  }
  onSelect(department){

   this.router.navigate(['/department-list', department.id]);
   /* Now making the use of the relative routes */
   //this.router.navigate([department.id], {relativeTo:this.route});

  }

  isSelected(department) { return department.id === this.selectedId; }
}
