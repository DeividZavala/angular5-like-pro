import {
  AfterContentInit, Component, ComponentFactoryResolver, ComponentRef, TemplateRef, ViewChild,
  ViewContainerRef
} from '@angular/core';

import {AuthFormComponent} from "./auth-form/auth-form.component";

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div #entry></div>
      <template #tmpl let-name let-location="location">
        {{name}}: {{location}}
      </template>
    </div>
  `
})
export class AppComponent implements AfterContentInit{

  @ViewChild('entry', {read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild('tmpl') tmpl : TemplateRef<any>;

  ngAfterContentInit(){
    this.entry.createEmbeddedView(this.tmpl,{
      $implicit: "David Zavala",
      location: "Mexico City, MX"
    });
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}
