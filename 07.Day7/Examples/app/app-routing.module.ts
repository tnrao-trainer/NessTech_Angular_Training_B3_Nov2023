import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmpsComponent } from './emps/emps.component';
import { DeptsComponent } from './depts/depts.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './details/details.component';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
   { path : "", component : HomeComponent},   
   { path : "Emps", component : EmpsComponent, canActivate : [AuthGuardService]},   
   { path : "Depts", component : DeptsComponent, canActivate : [AuthGuardService]},     
   { path : "Aboutus", component : AboutusComponent},   
   { path : "Login", component :  LoginComponent},   
   { path : "Details/:id", component : DetailsComponent},   
   { path : "**", component : NotFoundComponent},   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
