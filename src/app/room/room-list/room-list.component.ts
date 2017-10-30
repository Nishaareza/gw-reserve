import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IRoom } from './../../interfaces/IRoom';
import { RoomService } from './../../services/room.service';


@Component({
  selector: 'app-room-list-component',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})

export class RoomListComponent implements OnInit {
  public room: IRoom;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _roomService: RoomService
  ) {}

  ngOnInit() {
    this._activatedRoute.parent.paramMap.subscribe(route => this._switchRoom(route.get('id')));
  }
  public deleteReservation(id) {
    this._roomService.deleteRoomReservation(this.room.id, id);
  }
  private _switchRoom(id: string) {
    this._roomService.getRoomById(id).subscribe(room => { this.room = room; });
  }
}
