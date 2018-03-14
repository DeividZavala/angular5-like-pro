import {AbstractControl} from "@angular/forms";
import {exists} from "fs";

export class StockInventoryValidators{

  static checkBranch(control: AbstractControl){
    const regexp = /[a-z]\d{3}$/i;
    const valid = regexp.test(control.value);
    return valid ? null : {invalidBranch: true};
  }

  static checkStockExist(control:  AbstractControl){

    const stockItem = control.get("stock");
    const selector = control.get("selector");

    if(!(stockItem && selector)) return null;

    const exists = stockItem.value.some((item)=>{
      return item.product_id === parseInt(selector.value.product_id, 10)
    });

    return exists ? {stockExists: true} : null;

  }

}
