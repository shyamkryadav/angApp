import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent {
  seletedProperty!:string ;
  getProduct(value: any){
    console.log(value.target.value)
    this.seletedProperty=value.target.value;
  }


}
