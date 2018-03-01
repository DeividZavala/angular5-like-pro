import { Component,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <label>
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
