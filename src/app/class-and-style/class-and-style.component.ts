import { Component } from '@angular/core';

@Component({
  selector: 'app-class-and-style',
  templateUrl: './class-and-style.component.html',
  styleUrls: ['./class-and-style.component.css']
})
export class ClassAndStyleComponent {
  myPro:boolean=true;
  isActive:boolean=true;
  divMargin:string="25px"

  mltClass={
    class1:true,
    class2:true,
    class3:true,
  }

  divStyle={
    padding:'10px',
    color:'yellow',
    margin:'10px',
    background:'blue',
    border:"5px solid red",
    'border-radius':'20px'
  }
}
