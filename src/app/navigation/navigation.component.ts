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
       url: 'c1'
     },
     {
       title: 'Item 2',
       url: 'c2'
     },
     {
       title: 'Item 3',
       url: 'c2/5'
     },
     {
       title: 'Item 4',
       url: 'c2/500'
     },
   ];
  }
  showMeTheUrl(url) {
    alert(url);
  }
}

