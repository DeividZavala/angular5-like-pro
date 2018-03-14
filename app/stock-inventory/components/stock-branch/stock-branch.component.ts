import {Component, Input} from "@angular/core";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'stock-branch',
  styleUrls: ['stock-branch.component.scss'],
  template: `
  
    <div [formGroup]="parent">
      <div formGroupName="store">
        <input 
          type="text"
          placeholder="Brand ID"
          formControlName="branch">
        <div class="error" *ngIf="required('branch')">
          Branch ID es requerido
        </div>
        <!-- error section -->
        <div class="error" *ngIf="invalid">
          Branch ID Invalido,debe contener 1 letra y 3 números
        </div>
        <div
          class="error"
          *ngIf="unknown">
          Unknown branch, please check the ID
        </div>
        <!-- end error section -->
        <input 
          type="text"
          placeholder="Manager Code"
          formControlName="code">
        <div class="error" *ngIf="required('code')">
          Code ID es requerido
        </div>
      </div>
    </div>
    
  `
})
export class StockBranchComponent{
  @Input()
  parent: FormGroup;

  get unknown(){
    return (
      this.parent.get("store.branch").hasError('unknownBranch') &&
      this.parent.get("store.branch").dirty
    );
  }

  get invalid(){
    return (
      this.parent.get("store.branch").hasError('invalidBranch') &&
      this.parent.get("store.branch").dirty &&
      !this.required('branch')
    );
  }

  required(name: string){
    return (
      this.parent.get(`store.${name}`).hasError('required') &&
      this.parent.get(`store.${name}`).touched
    );
  }

}
