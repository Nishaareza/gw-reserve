import { Component, OnInit } from '@angular/core';
import { RoomService } from './../services/room.service';
import 'rxjs/add/operator/do';

interface INavigationItem {
  title: string;
  url: string;
  color?: string;
}

@Component({
  selector   : 'app-navigation-component',
  templateUrl: './navigation.component.html',
  styleUrls  : ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public navigationItems: INavigationItem[];
  constructor(private _roomService: RoomService) {}
  ngOnInit() {
      this._roomService.roomsObservable
      .do(() => {
        this.navigationItems = [];
        this.navigationItems.push({
          color: 'blue',
          title: 'Welcome',
          url: '/welcome'
        });
      })
      .map(rooms => {
        return rooms.map(room => {
          const navigationItem: INavigationItem = {
            color: 'green',
            title: room.name,
            url: '/rooms/' + room.id
          };
          return navigationItem;
        });
      })
      .subscribe(rooms => {
        this.navigationItems = this.navigationItems.concat(rooms);
      });
  }
}

