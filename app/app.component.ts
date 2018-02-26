import {
  AfterContentInit, Component, ComponentFactoryResolver, ComponentRef, ViewChild,
  ViewContainerRef
} from '@angular/core';

import {AuthFormComponent} from "./auth-form/auth-form.component";

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <button (click)="destroyComponent()">
        Destroy
      </button>
      <button (click)="moveComponent()">
        Move
      </button>
      <div #entry></div>
    </div>
  `
})
export class AppComponent implements AfterContentInit{

  component: ComponentRef<AuthFormComponent>;

  constructor(
    private resolver: ComponentFactoryResolver
  ){}

  @ViewChild('entry', {read: ViewContainerRef }) entry: ViewContainerRef;

  ngAfterContentInit(){
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    this.entry.createComponent(authFormFactory);
    this.component = this.entry.createComponent(authFormFactory, 0);
    // Una vez que creamos el componente podemos cambiar sus atributos
    this.component.instance.title = "Crear cuenta";
    this.component.instance.submitted.subscribe(this.loginUser);
  }

  destroyComponent(){
    this.component.destroy();
  }

  moveComponent(){
    this.entry.move(this.component.hostView, 1);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}
