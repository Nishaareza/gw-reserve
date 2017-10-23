/**
 * Created by nisha on 10/3/2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { FourOhFourComponent } from './404/404.component';

import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: '**',
    component: FourOhFourComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
 exports: [
   RouterModule
 ]
})

export class AppRoutingModule { }

export const routedComponents = [ FourOhFourComponent, WelcomeComponent ];
