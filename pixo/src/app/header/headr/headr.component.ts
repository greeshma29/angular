import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-headr',
  templateUrl: './headr.component.html',
  styleUrls: ['./headr.component.css']
})
export class HeadrComponent implements OnInit {

  constructor(public router:Router, public auth:AuthenticationService) { }

  ngOnInit() {
  }

}
