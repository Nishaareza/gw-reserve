
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoomFormComponent} from './room/room-form/room-form.component';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule, routedComponents  } from './app.routing.module';
import { LoginComponent } from './navigation/login/login.component';
import { LoginService } from './services/login.service';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
],
  declarations: [
    NavigationComponent,
    AppComponent,
    LoginComponent,
    routedComponents,
    RoomFormComponent
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
