import { Component } from '@angular/core';

@Component({
  selector   : 'app-c2-component',
  templateUrl: './c2.component.html',
  styleUrls  : ['./c2.component.css']
})
export class C2Component {
  constructor() {
    console.log('c2component');
    alert("c2");
  }
}

