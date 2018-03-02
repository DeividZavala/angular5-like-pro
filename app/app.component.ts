import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <label>
        Número de tarjeta de credito
        <input 
          name="credit-card" 
          type="text" 
          placeholder="Ingresa los 16 digistos de tu tarjeta"
        credit-card>
      </label>
      <label
        tooltip="3 digits, back of your card"
        #myTooltip="tooltip">
        Enter your security code
        <span
          (mouseover)="myTooltip.show()"
          (mouseout)="myTooltip.hide()">
          (?)
        </span>
        <input type="text">
      </label>
    </div>
  `
})
export class AppComponent{

}
