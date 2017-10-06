import { Component } from '@angular/core';
import { LoginService } from './../../services/login.service';

@Component({
  selector   : 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls  : ['./login.component.css']
})
export class LoginComponent {
  public userChoices: string[] = ['Google', 'GitHub'];
  public selectedValue = null;
  constructor(private loginService: LoginService) { }

  public login() {
    this.loginService.login();
  }

  public logout() {
    this.loginService.logout();
  }

  get username() {
    // this will always get the latest from our service
    return this.loginService.getLoggedInUser();
  }
}
