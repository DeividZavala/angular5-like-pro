import {AfterContentInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';

import {AuthFormComponent} from "./auth-form/auth-form.component";

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
  
  <div>
    <div #entry></div>
  </div>
  
  `
})
export class AppComponent implements AfterContentInit{

  constructor(
    private resolver: ComponentFactoryResolver
  ){}

  @ViewChild('entry', {read: ViewContainerRef }) entry: ViewContainerRef;

  ngAfterContentInit(){
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    const component = this.entry.createComponent(authFormFactory);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}
