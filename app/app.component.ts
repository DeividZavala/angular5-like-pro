import { Component } from '@angular/core';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
  
  <div>
    <auth-form (submitted)="createUser($event)"></auth-form>
    <auth-form (submitted)="loginUser($event)"></auth-form>
  </div>
  
  `
})
export class AppComponent {

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}
