import { Injectable } from '@angular/core';
import { CanActivate , ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { LoginService } from './login.service';

@Injectable()
export class LoginGuardService implements CanActivate {
  constructor(private _loginService: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
    console.log(routerState);
    const user = this._loginService.getLoggedInUser();
    if (user === null) return false;
    return true;
  }
}
