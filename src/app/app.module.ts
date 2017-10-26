
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoomModule } from './room/room.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule, routedComponents  } from './app.routing.module';
import { LoginComponent } from './navigation/login/login.component';
import { LoginService } from './services/login.service';
import { RoomService } from './services/room.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from './../environments/environment';


@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfiguration),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
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
    LoginService,
    RoomService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
