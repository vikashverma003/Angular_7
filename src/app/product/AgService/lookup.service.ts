import { Injectable } from '@angular/core';
import {Lookup} from '../model/lookup';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  private units: Array<Lookup>=[
    {name:'pcx', code:'1', category:1},
    {name:'pcxrt', code:'2', category:1},
    {name:'pcxq', code:'3', category:1},
    {name:'pcxr', code:'4', category:1},
    {name:'pcxt', code:'5', category:1}
    
  ];

  
  private productCategories: Array<Lookup>=[
    {name:'pickles', code:'1', category:1},
    {name:'rice', code:'2', category:1},
    {name:'tomato', code:'3', category:1},
    {name:'potatot', code:'4', category:1},
    {name:'xmnv', code:'5', category:1}
    
  ];
  constructor() { }


  getProductCategories():Observable<Lookup[]>{
    return of(this.productCategories);
  }

  getUnits():Observable<Lookup[]>{
    return of(this.units);
  }
}
