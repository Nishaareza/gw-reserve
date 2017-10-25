import { Component } from '@angular/core';
import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector   : 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls  : ['./login.component.css']
})
export class LoginComponent {
  public userChoices: string[] = ['Google', 'GitHub'];
  public choice = '' ;
  public selectedValue = null;
  public loggedInUser;
  constructor(
    private _loginService: LoginService,
    private _router: Router) {
    this._loginService.getLoggedInUser()
      .map(user => {
        if (!user) return;
        return {
          displayName: user.displayName,
          pictureURL: user.photoURL
        }
      })
      .subscribe(user => {
        this.loggedInUser = user;
      });
  }

  public login() {
    this._loginService.login(this.choice);
    if (this._router.url.substr(0, 6) === '/rooms') this._router.navigateByUrl('/welcome');
  }

  public logout() {
    this._loginService.logout();
  }

  get username() {
    // this will always get the latest from our service
    return this._loginService.getLoggedInUser();
  }
  public onChangeValue(userChoice) {
    this.choice = userChoice;
  }
}
