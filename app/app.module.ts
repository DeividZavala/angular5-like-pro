import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import {StockInventoryModule} from "./stock-inventory/stock-inventory.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StockInventoryModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
