import {Component} from "@angular/core";

@Component({
  selector: 'auth-message',
  template: `

    <div>
      Estaras logeado por {{days}} dias
    </div>
  
  `
})

export class AuthMessageComponent{
  days: number = 7;
}
