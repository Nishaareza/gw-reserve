import { Component, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector   : 'app-welcome-component',
  templateUrl: './welcome.component.html',
  styleUrls  : ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public isShowingLoginWarning: boolean;

  constructor(private _activatedRoute: ActivatedRoute) {  }
  ngOnInit() {
    this._activatedRoute.fragment.subscribe({
      next: fragment => {
        this.isShowingLoginWarning = true;
      }
    });
  }

  closeWarnings() {
    this.isShowingLoginWarning = false;
  }
}
