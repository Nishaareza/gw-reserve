import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector   : 'app-room-form-component',
  templateUrl: './room-form.component.html',
  styleUrls  : ['./room-form.component.css']
})

export class RoomFormComponent implements OnInit {
  // @ViewChild("myForm")
  // private _myForm: NgForm;
  public options: string[];
  @Input()
  public roomId: string;
  onSubmit(f: NgForm) {
    console.log(f.value);
    f.reset();
  }
  ngOnInit() {
    this.options = [
      'client meeting',
      'job interview',
      'scrum meeting'
    ];
  }
}
