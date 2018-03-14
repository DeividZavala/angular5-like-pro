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

  required(name: string){
    return (
      this.parent.get(`store.${name}`).hasError('required') &&
      this.parent.get(`store.${name}`).touched
    );
  }

}
