import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IReservation } from './../../interfaces/IReservation';

@Component({
  selector: 'app-room-list-component',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})

export class RoomListComponent implements OnInit {
  public roomId: string;
  public reservations: IReservation[];

  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.reservations = [];

    this._activatedRoute.parent.paramMap.subscribe(param => {
      this._switchRoom(param.get('id'));
    });
  }
  private _switchRoom(id: string) {
    this.roomId = id;
  }
}
