import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datahandling',
  templateUrl: './datahandling.component.html',
  styleUrls: ['./datahandling.component.css']
})
export class DatahandlingComponent  {
    name:string;
    age:number;
    email: string;

    constructor(){
          this.name = "first";
          this.age = 20;
          this.email = "first@gmail.com";
    }
    changeval():void{
      this.name = "second";
      this.age = 16;
      this.email = "second@gmail.com";

    }
  
}
