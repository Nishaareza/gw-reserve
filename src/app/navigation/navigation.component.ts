import { Component } from '@angular/core';

interface INavigationItem {
  title: string;
  url: string;
}

@Component({
  selector   : 'app-navigation-component',
  templateUrl: './navigation.component.html',
  styleUrls  : ['./navigation.component.css']
})
export class NavigationComponent {
  public navigationItems: INavigationItem[];
  constructor() {
   console.log('navigation component');
   this.navigationItems = [
     {
       title: 'Welcome',
       url: 'welcome'
     },
     {
       title: 'Donkey Kong',
       url: 'c1'
     },
     {
       title: 'Sim City',
       url: 'room/5'
     },
     {
       title: 'Halo',
       url: 'room/500'
     },
     {
       title: 'Item 4',
       url: 'room/50'
     },
     {
       title: 'Item 4',
       url: 'room/55'
     }
   ];
  }
  showMeTheUrl(url) {
    alert(url);
  }
}

