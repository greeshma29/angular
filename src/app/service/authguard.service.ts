import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(public auth:AuthenticationService, public router:Router) { }
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
   if(this.auth.isUserLoggedIn())
    return true;
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
