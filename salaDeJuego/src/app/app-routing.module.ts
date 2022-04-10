import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './componentes/error/error.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';

const routes: Routes = [
  
/*{path:'home',component:HomeComponent,
children:[
  {path:'login',component:LoginComponent},
  {path:'quien-soy',component:QuienSoyComponent}
]},
*/
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'quien-soy',component:QuienSoyComponent},

{path:"",redirectTo:"/home",pathMatch:"full"},
{path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
