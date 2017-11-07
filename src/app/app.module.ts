import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent, App2Component, App3Component } from './app.component';

@NgModule({
  declarations: [
    AppComponent, App2Component, App3Component
  ],
  imports: [
    BrowserModule],
  providers: [],
  bootstrap: [ App2Component]
})
export class AppModule { }
