import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public router:Router, public auth:AuthenticationService) { }
  
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot)
  {
    if(this.auth.isUserloggedIn())
      return true;
        else
          {
             this.router.navigate(['/login']);
             return false;
          }
  }
}
