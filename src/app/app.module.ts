import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ClassAndStyleComponent } from './class-and-style/class-and-style.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ClassAndStyleComponent,
    EventBindingComponent,
    TemplateReferenceVariableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
