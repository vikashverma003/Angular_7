import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../model/product';
import { ProductService } from '../AgService/product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  product$:Observable<IProduct>;


  constructor( private route: ActivatedRoute,private productService:ProductService) { }

  /*  reading the parameter from the url */
  ngOnInit(): void {
    
  }

}
