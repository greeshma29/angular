import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage:string;
  autherized : boolean;


  constructor(public auth:AuthenticationService, public router:Router) { 
    this.errorMessage = "invalid credentials";
    this.autherized = true;

  }
checkLogin(txtLogin:HTMLInputElement, txtPass:HTMLInputElement){
  if(this.auth.authenticate(txtLogin.value, txtPass.value)){
    this.autherized = true;
    this.router.navigate(['/Product']);
  }else{
    this.autherized = false;
  }
}
  ngOnInit() {
  }

}
