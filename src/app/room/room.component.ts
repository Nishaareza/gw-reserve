import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { RoomService } from './../services/room.service';
import { IRoom } from './../interfaces/IRoom';

const animations = [
    trigger('onLoad', [
      state('init', style({
        bottom : '-420px',
        opacity: 0
      })),
      state('complete', style({
        bottom: '-110px',
        opacity: .5
      })),
      transition('init => complete', animate('1220ms ease-out'))
    ])
];

@Component({
  selector   : 'app-room-component',
  templateUrl: './room.component.html',
  styleUrls  : ['./room.component.css'],
  animations
})


export class RoomComponent implements OnInit {
 public room: IRoom;
 public state: string;
  constructor(
    private activeRoute: ActivatedRoute,
    private _roomService: RoomService
  ) { }
  ngOnInit() {
    // do this when you know user won't change url
    console.log('Snapshot', this.activeRoute.snapshot.paramMap.get('id'));

    // current way
    this.activeRoute.paramMap.subscribe(route => {
      this.state = 'init';
      this._switchRoom(route.get('id'));
    });
  }
  private _switchRoom(id: string) {
    this._roomService.getRoomById(id).subscribe(room => {
      this.state = 'complete';
      this.room = room;
    });
  }
}

