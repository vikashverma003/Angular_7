import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { Lookup } from '../model/lookup';
import {Product, IProduct } from '../model/product';
import { ProductService } from '../AgService/product.service';
import { LookupService } from '../AgService/lookup.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  formSubmitted = false; /* for the formvalidation */
  productForm=this.fb.group({});
  units:Observable<Lookup[]>;
  categories:Observable<Lookup[]>;
/* DI injection  */
  constructor(private fb:FormBuilder,private lookupService:LookupService,
    private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.productForm.addControl('id',new FormControl(''));
    this.productForm.addControl('name',new FormControl('',[Validators.required]));
    this.productForm.addControl('code',new FormControl('',[Validators.required]));
    this.productForm.addControl('category',new FormControl('',[Validators.required]));
    this.productForm.addControl('unit',new FormControl('',[Validators.required]));
    this.productForm.addControl('purchaseRate',new FormControl('',[Validators.required]));
    this.productForm.addControl('salesRate',new FormControl('',[Validators.required]));
    this.units=this.lookupService.getUnits();
    this.categories=this.lookupService.getProductCategories();

  }

  save($event:any):void{
    this.formSubmitted = true;
    if(!this.productForm.valid)
    {
      return
    }
    this.saveProduct();
    this.router.navigate(['/product']);
  }
  saveAndContinue($event:any):void{


  }

  private saveProduct(){
/* instance of the class*/
    const product=new Product();
    product.id=this.productForm.get('id').value;
    product.name=this.productForm.get('name').value;
    product.code=this.productForm.get('code').value;
    product.category = this.getLookupObjFromCode(this.productForm.get('category').value);
    product.unit =  this.getLookupObjFromCode(this.productForm.get('unit').value);
    product.purchaseRate =  this.productForm.get('purchaseRate').value;
    product.salesRate = this.productForm.get('salesRate').value;
    /* call of the service for saving the product */
    this.productService.addNewProduct(product);

  }

  getLookupObjFromCode(code:string):Lookup{
    var lookup:Lookup = null;
    const subscription = this.units.subscribe(lookups => {
      lookup  = lookups.find(item => item.code == code)
    })
    subscription.unsubscribe();
    return lookup;
  }

}
