import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-headr',
  templateUrl: './user-headr.component.html',
  styleUrls: ['./user-headr.component.css']
})
export class UserHeadrComponent implements OnInit {

  constructor(public auth:AuthenticationService, public router:Router) { }

  ngOnInit() {
  }

}
