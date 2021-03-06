import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { CanDeactivateGuardService } from './../services/can-deactivate-guard.service';
import { LoginGuardService } from './../services/login-guard.service';

import { RoomComponent } from './room.component';
import { RoomFormComponent } from './room-form/room-form.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomReactiveFormComponent } from './room-reactive-form/room-reactive-form.component';

const routes: Routes = [
  {
    path: 'rooms/:id',
    component: RoomComponent,
    canActivate: [LoginGuardService],

    children: [
      {
        path: 'reactive-form',
        component: RoomReactiveFormComponent,
        canDeactivate: [CanDeactivateGuardService]
      },
      {
        path: 'form',
        component: RoomFormComponent,
        canDeactivate: [CanDeactivateGuardService]
      },
      {
        path: 'list',
        component: RoomListComponent
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '/not/found',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuardService,
    LoginGuardService
  ]
})

export class RoomRoutingModule { }

export const routedComponents = [RoomComponent, RoomFormComponent, RoomListComponent, RoomReactiveFormComponent];
