import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ICanDeactivate } from './../../services/can-deactivate-guard.service';

@Component({
  selector   : 'app-room-form-component',
  templateUrl: './room-form.component.html',
  styleUrls  : ['./room-form.component.css']
})

export class RoomFormComponent implements OnInit, ICanDeactivate {
  // @ViewChild("myForm")
  // private _myForm: NgForm;
  public options: string[];
  @Input()
  public roomId: string;
  onSubmit(f: NgForm) {
    console.log(f.value);
    f.reset();
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
  private _switchRoom(id: string) {
    this.roomId = id;
  }
}
