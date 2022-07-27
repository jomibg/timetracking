import { Injectable } from '@angular/core';
import {Stopwatch} from "./stopwatch";
import {User} from "./user";
import {Router} from "@angular/router";
import {TimetrackingService} from "./timetracking.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  currentUser?:User;
  userDB: { [key:string]: User } = {};


  getOrCrate(usrname:string):void{
    if(this.userDB[usrname]) {
      this.currentUser = this.userDB[usrname];

    }
     else {
      this.currentUser={
        username:usrname,
        time_1st:0,
        time_2nd:0,
        time_3rd:0
      }
      this.userDB[usrname] = this.currentUser;
    }
    localStorage.setItem('user',usrname);
     this.router.navigate(['']);
  }

  logout():void{
    if (this.currentUser != undefined) {
      this.userDB[this.currentUser?.username] = this.currentUser;
    }
    this.currentUser = undefined;
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  constructor(private router: Router) { }
}
