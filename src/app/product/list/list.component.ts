import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../model/product';
import { ProductService } from '../AgService/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products:Observable<IProduct[]>=null;
 

  constructor(private router: Router, private productService:ProductService) { }

  ngOnInit(): void {
    this.products=this.productService.getAllProducts();
    console.log(this.products);
  }
  deleteProduct(product):void{
    const result = this.productService.deleteProduct(product);
    console.log(result);
  }

  viewProduct(product:IProduct):void{

    this.router.navigate(['product/view/'+product.id]);

  }

}
