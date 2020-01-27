import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent  {

  value1 : number;
  value2 : number;
  result : number;


  addition(val1:HTMLInputElement,val2:HTMLInputElement){
    this.value1 =parseInt(val1.value);
    this.value2 = parseInt(val2.value);
    this.result =(this.value1 + this.value2);
  }

  sub(val1:HTMLInputElement,val2:HTMLInputElement){
    this.value1 =parseInt(val1.value);
    this.value2 = parseInt(val2.value);
    this.result =(this.value1 - this.value2);
  }

  mul(val1:HTMLInputElement,val2:HTMLInputElement){
    this.value1 =parseInt(val1.value);
    this.value2 = parseInt(val2.value);
    this.result =(this.value1 * this.value2);
  }

  div(val1:HTMLInputElement,val2:HTMLInputElement){
    this.value1 =parseInt(val1.value);
    this.value2 = parseInt(val2.value);
    this.result =(this.value1 / this.value2);
  }

}
