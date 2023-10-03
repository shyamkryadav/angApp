import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ClassAndStyleComponent } from './class-and-style/class-and-style.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { IfElseComponent } from './if-else/if-else.component';
import { SwitchesComponent } from './switches/switches.component';
import { ForLoopComponent } from './for-loop/for-loop.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ClassAndStyleComponent,
    EventBindingComponent,
    TemplateReferenceVariableComponent,
    TwoWayBindingComponent,
    IfElseComponent,
    SwitchesComponent,
    ForLoopComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
