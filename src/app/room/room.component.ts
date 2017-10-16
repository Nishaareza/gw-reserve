import {Component, OnInit} from '@angular/core';

import { ActivatedRoute, ParamMap} from '@angular/router';
import { ICanDeactivate } from './../services/can-deactivate-guard.service';

@Component({
  selector   : 'app-room-component',
  templateUrl: './room.component.html',
  styleUrls  : ['./room.component.css']
})


export class RoomComponent implements OnInit {
  public paramMap: string;
  public canThisDeactivate: boolean;
  constructor(
    private activeRoute: ActivatedRoute
  ) {
    this.canThisDeactivate = true;
  }
  ngOnInit() {
    console.log('Component Room Init');
    // do this when you know user won't change url
    console.log('Snapshot', this.activeRoute.snapshot.paramMap.get('id'));

    // current way
    this.activeRoute.paramMap.subscribe((parameters: ParamMap) => {
      console.log('param map', parameters.get('id'));
      this.paramMap =  parameters.get('id');
    });
  }
  toggleCanDeactivate() {
    this.canThisDeactivate = !this.canThisDeactivate;
  }
  canDeactivate() {
    return this.canThisDeactivate;
  }
}

