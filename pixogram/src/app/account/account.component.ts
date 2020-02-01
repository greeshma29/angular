import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(public router:Router, public auth:AuthenticationService){ }
  newsfeed():void{
    this.router.navigate(['/newsfeed']);
  }
  blockacc():void{
    this.router.navigate(['/blockacc']);
  }
  accupdate():void{
    this.router.navigate(['/accupdate']);
  }
  search():void{
    this.router.navigate(['/search']);
  }
  logout():void{
    this.router.navigate(['/logout']);
  }

  ngOnInit() {
  }

}
