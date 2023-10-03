import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo :'login', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'product',component:ProductComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component:PageNotFoundComponent},

  // {path:'product',children:[
  //   {path:'',component:ProductComponent},
  //   // {path:'laptop',component:LaptopComponent},
  //   {path:'',component:ProductComponent},
  //   {path:'',component:ProductComponent},
  // ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
