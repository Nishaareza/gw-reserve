import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap} from '@angular/router';

import { RoomService } from './../services/room.service';

@Component({
  selector   : 'app-room-component',
  templateUrl: './room.component.html',
  styleUrls  : ['./room.component.css']
})


export class RoomComponent implements OnInit {
 public room;
  constructor(
    private activeRoute: ActivatedRoute,
    private _roomService: RoomService
  ) { }
  ngOnInit() {
    console.log('Component Room Init');
    // do this when you know user won't change url
    console.log('Snapshot', this.activeRoute.snapshot.paramMap.get('id'));

    // current way
    this.activeRoute.paramMap.subscribe(route => this._switchRoom(route.get('id')));
  }
  private _switchRoom(id: string) {
    this._roomService.getRoomById(id).subscribe(room => { this.room = room });
  }
}

