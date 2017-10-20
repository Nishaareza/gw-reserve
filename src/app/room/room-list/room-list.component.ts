import { Component, OnInit, Input } from '@angular/core';

import { IReservation } from './../../interfaces/IReservation';

@Component({
  selector: 'app-room-list-component',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})

export class RoomListComponent implements OnInit {
  @Input()
  public roomId: string;
  public reservations: IReservation[];

  constructor() {}

  ngOnInit() {
    this.reservations = [];
  }
}
