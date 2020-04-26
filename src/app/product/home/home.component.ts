import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name="sam";
  count=0;
  bgColor=true;
  txtColor=true
  currentClasses={};
  currentStyles={};

  isDisabled=false;
  constructor() { }

  ngOnInit(): void {
  }

  counter(){

    this.count++;
    this.count===10 ? this.isDisabled=true : this.isDisabled=false;
  }  
  reset(){
    this.count--;
    this.isDisabled=false;
  }
  setCurrentClasses(){
    this.currentClasses={
      txtcolor:!this.txtColor,
      bgcolor:this.bgColor
    }
  }

  setCurrentStyles(){
     
    this.currentStyles={
      'background-color':this.bgColor?"blue":"pink",
      'color':!this.txtColor?"green":"yellow"
    }

  }




}
