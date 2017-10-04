
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [
    BrowserModule,
     AppRoutingModule
],
  declarations: [
    NavigationComponent,
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
