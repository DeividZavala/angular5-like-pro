import { Component,ChangeDetectionStrategy } from '@angular/core';

/**
 * El change detection strategy es la razon de que angular pueda ser más veloz
 *
 * Defaul:  compara cada una de las popiedades el objeto y si alguna cambia, angular actualiza
 *
 * onPush: Compara el objeto o modelo completo y solo es actualizado si este es modificado por completo
 *
 * Esto permite que las aplicaciones sean mas rapidas ya que angular no tiene que evaluar propiedad por propiedas
 * si no el objeto completo.
 *
 */

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.Default,
  //changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <button (click)="addProp()">Add property</button>
      <button (click)="changeUser()">Change user object</button>
      <button (click)="changeName()">Change name property</button>
      <div class="users">
        <example-one [user]="user"></example-one>
        <example-two [user]="user"></example-two>
      </div>
    </div>
  `
})
export class AppComponent{

  user: any={
    name: "David Zavala",
    age: 20,
    location: "Mexico"
  };

  addProp(){
    this.user.email = "pedrito@sola.com"
  }

  changeName(){
    this.user.name = "Elza nahoria";
  }

  changeUser(){
    this.user = {
      name: "Pollito Velazquez",
      age: 20,
      location: "Neza"
    }
  }

}
