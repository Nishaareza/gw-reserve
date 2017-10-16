import { Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector   : 'app-room-form-component',
  templateUrl: './room-form.component.html',
  styleUrls  : ['./room-form.component.css']
})

export class RoomFormComponent {
  onSubmit(f: NgForm) {
    console.log(f.value);
  }
}
