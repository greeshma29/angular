import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multiplemedia',
  templateUrl: './multiplemedia.component.html',
  styleUrls: ['./multiplemedia.component.css']
})
export class MultiplemediaComponent implements OnInit {

  constructor(public router:Router) { }
  singlemedia():void{
    this.router.navigate(['/singlemedia']);
  }
  ngOnInit() {
  }

}
