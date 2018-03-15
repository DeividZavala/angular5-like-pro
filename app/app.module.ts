import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from "@angular/http";


import { AppComponent } from './app.component';
import {StockInventoryModule} from "./stock-inventory/stock-inventory.module";
import {RouterModule, Routes} from "@angular/router";

import { MailModule } from './mail/mail.module';

export const ROUTER : Routes = [
  {
    path: '**',
    redirectTo: 'folder/index'
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StockInventoryModule,
    HttpModule,
    MailModule,
    RouterModule.forRoot(ROUTER)
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
