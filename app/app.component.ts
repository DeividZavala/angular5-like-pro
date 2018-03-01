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
    </div>
  `
})
export class AppComponent{

}
