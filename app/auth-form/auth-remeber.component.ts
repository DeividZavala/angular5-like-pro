import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'auth-remember',
  template: `
  
    <label>
      <input type="checkbox" (change)="onChecked($event.target.checked)" >
      Recordarme
    </label>
  
  `
})

export class AuthRememberComponent{

  @Output() checked: EventEmitter<any> = new EventEmitter<any>();

  onChecked(value: Boolean){
    this.checked.emit(value);
  }

}
