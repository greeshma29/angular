import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  name:string;
  job:string;
  


  constructor() {
    this.name="";
    this.job="software";
    
   }

  ngOnInit() {
  }

}
