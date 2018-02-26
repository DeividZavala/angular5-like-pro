/*
 * Para angular5 el modulo que se importa es Renderer2 en lugar de Renderer
 * versión de este demo Angular 4.0.0
 */

import {
  Component, Output, ChangeDetectorRef, QueryList, ViewChild, ViewChildren, EventEmitter, ContentChildren,
  AfterContentInit, AfterViewInit, ElementRef, Renderer
} from '@angular/core';

import { User } from './auth-form.interface';

import {AuthRememberComponent} from "./auth-remeber.component";
import {AuthMessageComponent} from "./auth-message.component";

@Component({
  selector: 'auth-form',
  styles:[`
    .email{border-color: #9f72e6}
  `],
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel #email>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <ng-content select="auth-remember"></ng-content>
        <auth-message [style.display]=" (showMessage ? 'inherit': 'none') "></auth-message>
        <auth-message [style.display]=" (showMessage ? 'inherit': 'none') "></auth-message>
        <auth-message [style.display]=" (showMessage ? 'inherit': 'none') "></auth-message>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit{

  constructor(
    private renderer: Renderer,
    private cd: ChangeDetectorRef
  ){}

  showMessage: boolean;

  // Nos da acceso al elemento del dom, atributos y metodos
  @ViewChild('email') email: ElementRef;

  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;

  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  ngAfterViewInit(){

    /***
     * Si queremos distruir nuestro código en distintas plataformas como la movil y web
     * es necesario que usemos el metodo Renderer para usar la api nativa de angular, Ej.
     ***/
    // Solo web
    //this.email.nativeElement.setAttribute("placeholder", "Ingresa tu correo");
    //this.email.nativeElement.classList.add('email');
    //this.email.nativeElement.focus();

    // Multiples plataformas
    this.renderer.setElementAttribute(this.email.nativeElement,'placeholder','Ingresa aqui tu email');
    this.renderer.setElementClass(this.email.nativeElement, 'email',true);
    this.renderer.invokeElementMethod(this.email.nativeElement,'focus');


    if(this.message){
      this.message.forEach((message) => message.days = 30);
    }
    this.cd.detectChanges();

  }

  ngAfterContentInit(){

    if(this.remember){
      this.remember.forEach((item)=>{
        item.checked.subscribe((checked: boolean) => this.showMessage = checked);
      })
    }

  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
