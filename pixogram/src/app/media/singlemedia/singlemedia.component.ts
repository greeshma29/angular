import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singlemedia',
  templateUrl: './singlemedia.component.html',
  styleUrls: ['./singlemedia.component.css']
})
export class SinglemediaComponent implements OnInit {

  constructor(public router:Router) { }
  multiplemedia():void{
    this.router.navigate(['/multiplemedia']);
  }
  ngOnInit() {
  }

}
