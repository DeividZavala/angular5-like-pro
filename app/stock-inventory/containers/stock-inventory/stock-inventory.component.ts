import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, FormArray, Validators} from "@angular/forms";

import {Product, Item} from '../../models/products.interface';

import {StockInventoryService} from "../../services/stock-inventory.service";
import {StockInventoryValidators} from "./stock-inventory.validators";

import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'stock-inventory',
  styleUrls:['stock-inventory.component.scss'],
  template: `
  
    <div class="stock-inventory">
      <form [formGroup]="form" (submit)="onSubmit()">
        
        <stock-branch
          [parent]="form">
        </stock-branch>
        
        <stock-selector 
          [parent]="form"
          [products]="products"
          (added)="addStock($event)" >
        </stock-selector>
        
        <stock-products 
          [parent]="form"
          (removed)="removeStock($event)"
          [map]="productMap">
        </stock-products>
        
        <div class="stock-product__price">
          Total: {{total | currency:"MXN":true}}
        </div>
        
        <div class="stock-inventory__buttons">
          <button 
            type="submit"
            [disabled]="form.invalid" >
            Order Item
          </button>
        </div>
        
        <pre>{{form.value | json}}</pre>
        
      </form>
    </div>
  
  `
})
export class StockInventoryComponent implements OnInit{

  products: Product[];

  productMap: Map<number, Product>;

  total: number;

  form = this.fb.group({
    store: this.fb.group({
      branch: ['', [Validators.required, StockInventoryValidators.checkBranch]],
      code: ['', Validators.required]
    }),
    selector: this.createStock({}),
    stock: this.fb.array([])
  });

  constructor(
    private fb: FormBuilder,
    private stockService: StockInventoryService
  ){}

  ngOnInit(){
    const cart = this.stockService.getCartItems();
    const products = this.stockService.getProducts();

    Observable
      .forkJoin(cart, products)
      .subscribe(([cart, products]: [Item[], Product[]] ) =>{

        const myMap = products.map<[number, Product]>(product=>[product.id, product]);

        this.productMap = new Map<number, Product>(myMap);
        this.products = products;
        cart.forEach(item => this.addStock(item));

        this.calculateTotal(this.form.get('stock').value);
        this.form.get('stock')
          .valueChanges.subscribe(value => {
            this.calculateTotal(value);
        })

      })
  }

  calculateTotal(value: Item[]){
    const total = value.reduce((prev, next)=>{
      return prev + (next.quantity * this.productMap.get(next.product_id).price);
    }, 0);
    this.total = total;
  }

  createStock(stock){
    return this.fb.group({
      product_id: parseInt(stock.product_id, 10)|| '',
      quantity:  stock.quantity || 10
    })
  }

  addStock(stock){
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }

  removeStock({group, index}: {group: FormGroup, index:number}){
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index);
  }

  onSubmit(){
    console.log("Form", this.form.value);
  }

}
