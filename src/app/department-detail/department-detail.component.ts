import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap } from '@angular/router'

@Component({
  selector: 'app-department-detail',
  template:`
  <h3>You selected department with id = {{deparmentId}}</h3>

  <p>
  <button (click)="showOverview()">overview</button>
  <button (click)="showContact()">contact</button>

  
  </p>
  
  <p>
    <button (click)="goPrevious()">Previous</button>
    <button (click)="goNext()">Next</button>
    <button (click)="gotoDepartments()">Back</button>
  </p>

  
`,
 // templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public deparmentId: number;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    /* Herer we are reading id from the url */
    //let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.deparmentId = id;
      console.log("DLLL", this.deparmentId)

    });
   // this.deparmentId=id;
  }

  goPrevious(){
    let previousId = this.deparmentId-1;
    this.router.navigate(['/deparment-list', previousId]);


  }
  goNext(){
    let nextId = this.deparmentId+1;
    this.router.navigate(['/deparment-list', nextId]);
    console.log("nexr id", nextId);

  } 

  /* for passing the optional parameters in the (url) */
  gotoDepartments(){
    let selectedId = this.deparmentId ? this.deparmentId : null;
    this.router.navigate(['/department-list', {id: selectedId}]);
  // this.router.navigate(['../', {id:selectedId}], {relativeTo:this.route});

  }

  showOverview(){

    this.router.navigate(['overview'], {relativeTo:this.route});

  }

  showContact(){

    this.router.navigate(['contact'], {relativeTo:this.route});

  }
}
