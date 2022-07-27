import { Component, OnInit, OnDestroy} from '@angular/core';
import {TimetrackingService} from "../timetracking.service";
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit,OnDestroy{


  constructor(public ttService:TimetrackingService) { }

  ngOnInit(): void {
    this.ttService.startFirst();
  }

  ngOnDestroy():void{
    this.ttService.stopFirst();
  }


}
