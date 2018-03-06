import {Component} from "@angular/core";
import {FormControl, FormGroup, FormArray} from "@angular/forms";

import {Product} from '../../models/products.interface';

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
          [products]="products">
        </stock-selector>
        
        <stock-products 
          [parent]="form">
        </stock-products>
        
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
export class StockInventoryComponent{

  products: Product[] = [
    { 'id':1, 'name':"MacBook", 'price':2800},
    { 'id':2, 'name':"Xbox", 'price':450},
    { 'id':3, 'name':"Control inalambrico", 'price':55},
    { 'id':4, 'name':"PlayStation", 'price':400},
    { 'id':5, 'name':"Call of duty WWII", 'price': 50}
  ];

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl('')
    }),
    selector: this.createStock({}),
    stock: new FormArray([
      this.createStock({product_id:1,quantity:30}),
      this.createStock({product_id:3,quantity:50})
    ])
  });

  createStock(stock){
    return new FormGroup({
      product_id: new FormControl(stock.product_id || ''),
      quantity:  new FormControl(stock.quantity || 10)
    })
  }

  onSubmit(){
    console.log("Form", this.form.value);
  }

}
