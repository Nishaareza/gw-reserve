import { Injectable } from '@angular/core';
@Injectable()
export class LoginService {
  private _loggedInUser;

  constructor() {
    this._loggedInUser = null;
  }

  public login() {
    this._loggedInUser = {
      name: 'Nisha'
    };
  }

  public logout() {
    this._loggedInUser = null;
  }

  public getLoggedInUser() {
    // give the caller of this method a copy of logged in user
    return this._loggedInUser ? Object.assign({ }, this._loggedInUser) : null;
  }
}
