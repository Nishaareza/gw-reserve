/**
 * Created by nisha on 10/3/2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';

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
    path: 'c2/:id',
    component: C2Component
  },
  {
    path: 'c2',
    component: C2Component
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
  declarations: [
    C1Component,
    C2Component
  ],
 exports: [
   RouterModule
 ],
})

export class AppRoutingModule { }

export const routedComponents = [ C1Component, C2Component];
