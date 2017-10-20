/**
 * Created by nisha on 10/3/2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { RoomComponent } from './room/room.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { LoginGuardService } from './services/login-guard.service';
import { CanDeactivateService} from './services/can-deactivate-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'c1',
    pathMatch: 'full'
  },
  {
    path: 'c1',
    component: C1Component
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'room/:id',
    component: RoomComponent,
    canActivate: [ LoginGuardService],
    canDeactivate: [ CanDeactivateService ]
  },
  {
    path: 'room',
    component: RoomComponent
  },
  {
    path: '**',
    redirectTo: 'c1',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
 exports: [
   RouterModule
 ],
  providers: [
    LoginGuardService,
    CanDeactivateService
  ]
})

export class AppRoutingModule { }

export const routedComponents = [ C1Component, RoomComponent, WelcomeComponent ];
