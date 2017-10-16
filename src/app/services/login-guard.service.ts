import { Injectable } from '@angular/core';
import { Router, CanActivate , ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';


import { LoginService } from './login.service';

@Injectable()
export class LoginGuardService implements CanActivate {
  constructor(private _loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
    console.log(routerState);
    const user = this._loginService.getLoggedInUser();
    if (user === null) {
      this.router.navigate(['welcome'], {fragment: 'warning'});
      return false;
    }
    return true;
  }
}
