import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class LoginService {
  private _loggedInUser: Observable<firebase.User>;

  constructor(private _authService: AngularFireAuth) {
    this._loggedInUser = _authService.authState;
  }

  public login(userChoice): Promise<any> {
    if (userChoice === 'Google') {
      return this._authService.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .catch(error => alert(error.message));
    }
    return this._authService.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
      .catch(error => alert(error.message));
  }
  public logout(): Promise<any> {
    return this._authService.auth.signOut();
  }

  public getLoggedInUser(): Observable<firebase.User>  {
    // give the caller of this method a copy of logged in user
    return this._loggedInUser;
  }
}
