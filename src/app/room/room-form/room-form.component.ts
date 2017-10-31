import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ICanDeactivate } from './../../services/can-deactivate-guard.service';

@Component({
  selector   : 'app-room-form-component',
  templateUrl: './room-form.component.html',
  styleUrls  : ['./room-form.component.css']
})

export class RoomFormComponent implements OnInit, ICanDeactivate {
  @ViewChild('myForm')
  private _myForm: NgForm;
  public options: string[];
  public roomId: string;
  public onSubmit(reservationValues) {
    const message = 'Room reservation submitted';
    console.log(message, reservationValues);
    this._myForm.reset();
  }
  constructor(private _activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.options = [
      'client meeting',
      'job interview',
      'scrum meeting'
    ];
    this._activatedRoute.parent.paramMap.subscribe(param => {
      this._switchRoom(param.get('id'));
    });
  }

  public canDeactivate() {
    if (this._myForm.pristine || this._myForm.submitted) return true;
    return confirm('You appear to have unsaved changes. Discard and continue');
  }
  private _switchRoom(id: string) {
    this.roomId = id;
  }
}
