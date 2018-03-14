import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";

import {Product, Item} from "../models/products.interface";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class StockInventoryService{

  constructor(
    private http: Http
  ){}

  getCartItems(): Observable<Item[]> {
    return this.http.get('api/cart')
      .map((response: Response) => response.json())
      .catch((error:any)=>Observable.throw(error.json()))
  }

  getProducts(): Observable<Product[]>{
    return this.http.get('api/products')
      .map((response:Response)=>response.json())
      .catch((error: any)=> Observable.throw(error.json()))
  }

}