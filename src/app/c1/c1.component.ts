import { Component } from '@angular/core';

@Component({
  selector   : 'app-c1-component',
  templateUrl: './c1.component.html',
  styleUrls  : ['./c1.component.css']
})
export class C1Component {
  constructor() {
    console.log('c1component');
    alert("c1");
  }
}
