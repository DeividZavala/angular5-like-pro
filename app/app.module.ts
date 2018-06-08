import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Route,Routes, PreloadingStrategy} from '@angular/router';
import { HttpModule } from '@angular/http';

import { MailModule } from './mail/mail.module';

import { AppComponent } from './app.component';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import {AuthGuard} from "./auth/auth.guard";
import {AuthModule} from "./auth/auth.module";


export class CustomPreload implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload ? fn() : Observable.of(null)
  }
}

export const ROUTES: Routes = [
  { path: 'dashboard', canLoad:[AuthGuard], data: {preload: CustomPreload}, loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: '**', redirectTo: 'mail/folder/inbox' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [CustomPreload],
  imports: [
    BrowserModule,
    HttpModule,
    MailModule,
    AuthModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: CustomPreload})
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
