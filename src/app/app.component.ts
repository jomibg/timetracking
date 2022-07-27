import { Component } from '@angular/core';
import {LoginService} from "./login.service";
import {User} from "./user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'timetracking';
  constructor(private loginService:LoginService) {
  }

  logout(event:Event):void{
   if (this.loginService.currentUser)
      this.loginService.userDB[this.loginService.currentUser?.username] = this.loginService.currentUser;
   this.loginService.logout();
  }


}
