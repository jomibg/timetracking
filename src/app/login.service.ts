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

  getOrCrate(username:string):void{
    let DB = localStorage.getItem('DB') || '';
    this.userDB = JSON.parse(DB);
    if (this.userDB[username]){
      this.currentUser = this.userDB[username];
    }
    else {
      let user = new User(username, 0, 0, 0);
      this.userDB[username] = user;
      this.currentUser = user;
    }
    localStorage.setItem('user',username);
    this.router.navigate(['']);
  }

  logout():void{
    console.log(this.userDB);
    if (this.currentUser != undefined) {
      this.userDB[this.currentUser?.username] = this.currentUser;
    }
    this.currentUser = undefined;
    localStorage.setItem('DB',JSON.stringify(this.userDB));
    localStorage.removeItem('user');
    this.router.navigate(['/login'])
  }

  constructor(private router: Router) {
  }
}
