import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {ThirdComponent} from "./third/third.component";
import {LoginComponent} from "./login/login.component";
import {LoginGuardGuard} from "./login-guard.guard";

const routes: Routes = [
  { path: 'first', component: FirstComponent ,canActivate:[LoginGuardGuard]},
  {path: 'second',component: SecondComponent,canActivate:[LoginGuardGuard]},
  {path: 'third', component: ThirdComponent,canActivate:[LoginGuardGuard]},
  {path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/first', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
