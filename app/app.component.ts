import { Component } from '@angular/core';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
  
  <div>
    <!--<auth-form 
      (submitted)="createUser($event)">
      <h3>Crear cuenta</h3>
      <button type="submit">Registrarse</button>
    </auth-form>-->
    <auth-form (submitted)="loginUser($event)">
      <!-- Content child -->
      <h3>Login</h3>
      <auth-remember (checked)="rememberUser($event)"></auth-remember>
      <button type="submit">Login</button>
      <!-- Fin Content child -->
    </auth-form>
  </div>
  
  `
})
export class AppComponent {

  rememberMe: boolean = false;

  rememberUser(remember: boolean){
    this.rememberMe = remember;
  }

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user, this.rememberMe);
  }

}
