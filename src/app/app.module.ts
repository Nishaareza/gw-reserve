
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
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
    BrowserModule,
    RouterModule.forRoot(routes)
],
  declarations: [
    NavigationComponent,
    AppComponent,
    C1Component,
    C2Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
