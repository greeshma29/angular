import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

authorise:string;
  constructor(public router:Router, public auth:AuthenticationService) { 
    
  }
  register():void{
    this.router.navigate(['/registeration']);
  }
  signin(uname:HTMLInputElement,upassword:HTMLInputElement):void{
    if(this.auth.authenticate(uname.value, upassword.value))
    {
      this.router.navigate(['/mymedia']);
    }
    else
    this.authorise="invalid credentials"
  }
  ngOnInit() {
  }

}
