import {Component} from "@angular/core";
import {FormControl, FormGroup, FormArray} from "@angular/forms";

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
          [parent]="form">
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

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl('')
    }),
    selector: new FormGroup({
      products_id: new FormControl(''),
      quantity:  new FormControl(10)
    }),
    stock: new FormArray([])
  });

  onSubmit(){
    console.log("Form", this.form.value);
  }

}
