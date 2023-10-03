import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  name:string="shyam";

  myfun(){
    return "Method My Name is " +this.name;
  }

  appStatus:boolean=true;
  status1="online"
  status2="Offonline"
  enable:boolean=false;

}
