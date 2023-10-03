import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent {

  product=[
    {proimg:'altalt',name:'laptop',Id:'pro01',price:1500},
    {proimg:'altalt',name:'computer',Id:'pro01',price:1600},
    {proimg:'altalt',name:'Mobile',Id:'pro01',price:10000},
  ]
}
