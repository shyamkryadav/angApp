import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  msg:string='';  
  onAddCart(){
     this.msg="Pracut added in card"
  }

  getValue(event:any){
    console.log(event.target.value)
  }

  product(event:any){
    this.msg=` ${event.target.value } Pracut added in card`;
  }
}
