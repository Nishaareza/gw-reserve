
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoomModule } from './room/room.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule, routedComponents  } from './app.routing.module';
import { LoginComponent } from './navigation/login/login.component';
import { LoginService } from './services/login.service';


@NgModule({
  imports: [
    BrowserModule,
    RoomModule,
    AppRoutingModule,
],
  declarations: [
    NavigationComponent,
    AppComponent,
    LoginComponent,
    routedComponents,
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
