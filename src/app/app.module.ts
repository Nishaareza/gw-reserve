
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { C1Component } from './c1/c1.component';


@NgModule({
  declarations: [
    NavigationComponent,
    AppComponent,
    C1Component
  ],
  imports: [
    BrowserModule,
  //  RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
