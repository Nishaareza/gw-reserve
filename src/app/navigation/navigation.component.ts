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
       title: 'Room1',
       url: 'c1'
     },
     {
       title: 'Room2',
       url: 'room/5'
     }
   ];
  }
  showMeTheUrl(url) {
    alert(url);
  }
}

