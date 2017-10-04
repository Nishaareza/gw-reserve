import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector   : 'app-c2-component',
  templateUrl: './c2.component.html',
  styleUrls  : ['./c2.component.css']
})

export class C2Component implements OnInit {
  public paramMap: string;
  constructor(
    private activeRoute: ActivatedRoute

  ) { }
  ngOnInit() {
    console.log('Component Two Init');
    // do this when you know user won't change url
    console.log('Snapshot', this.activeRoute.snapshot.paramMap.get('id'));

    // current way
    this.activeRoute.paramMap.subscribe((parameters: ParamMap) => {
      console.log('param map', parameters.get('id'));
      this.paramMap =  parameters.get('id');
    });
  }
}

