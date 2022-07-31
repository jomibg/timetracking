import { Component } from '@angular/core';
import {LoginService} from "./login.service";

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
    this.loginService.logout();
  }


}
