import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  templateUrl: './template-reference-variable.component.html',
  styleUrls: ['./template-reference-variable.component.css']
})
export class TemplateReferenceVariableComponent {
  getInputInfo(e:any){
    console.log(e.value)
    console.log(e.id)
    console.log(e.type)

  }
}
