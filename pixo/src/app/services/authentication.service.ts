import { Injectable } from '@angular/core';
import { getLocaleTimeFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  authenticate(userid:string, password:string):boolean{
    if(userid === "first" && password ==="abc"){
      sessionStorage.setItem("user", userid);
      return true;

    }else{
      return false;
    }
  }
  isUserloggedIn():boolean{
    let user = sessionStorage.getItem('user');
    if(user==null)
    return false;
    return true;
  }
}
