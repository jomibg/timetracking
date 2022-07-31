import { Injectable } from '@angular/core';
import {Stopwatch} from "./stopwatch";
import {LoginService} from "./login.service";
import {first} from "rxjs";
import {compareNumbers} from "@angular/compiler-cli/src/version_helpers";

@Injectable({
  providedIn: 'root'
})


export class TimetrackingService {

  sw:Stopwatch = new Stopwatch();

  constructor(private loginService:LoginService) {
  }

  fst():number|undefined{
    return this.loginService.currentUser?.time_1st;}

  snd():number|undefined{
    return this.loginService.currentUser?.time_2nd;
  }

  trd():number|undefined{
    return this.loginService.currentUser?.time_3rd;
  }

  startFirst():void{
    if (this.loginService.currentUser) {
      this.sw.sec = this.loginService.currentUser?.time_1st;
      setTimeout(()=>this.sw.startTimer(),1000); //initialization second
    }

  }

  startSecond():void{
    if (this.loginService.currentUser) {
      this.sw.sec = this.loginService.currentUser?.time_2nd;
      setTimeout(()=>this.sw.startTimer(),1000);
    }

  }

  startThird():void{
    if (this.loginService.currentUser) {
      this.sw.sec = this.loginService.currentUser?.time_3rd;
      setTimeout(()=>this.sw.startTimer(),1000);
    }

  }

  stopFirst():void {
    this.sw.stopTimer();
    if (this.loginService.currentUser) {
      this.loginService.currentUser.time_1st= this.sw.sec;
    }
  }

    stopSecond():void {
      this.sw.stopTimer();
      if (this.loginService.currentUser) {
        this.loginService.currentUser.time_2nd = this.sw.sec;
      }
    }

    stopThird():void{
      this.sw.stopTimer();
      if (this.loginService.currentUser) {
      this.loginService.currentUser.time_3rd= this.sw.sec;
    }
      this.sw.resetTimer();
  }

}
