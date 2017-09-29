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
       title: 'Item 1',
       url: 'url/1'
     },
     {
       title: 'Item 2',
       url: 'url/2'
     },
   ];
  }
  showMeTheUrl(url) {
    alert(url);
  }
}

