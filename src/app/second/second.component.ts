import { Component, OnInit, OnDestroy} from '@angular/core';
import {TimetrackingService} from "../timetracking.service";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(public ttService:TimetrackingService) { }

  ngOnInit(): void {
    this.ttService.startSecond();
  }

  ngOnDestroy():void{
    this.ttService.stopSecond();
  }

}
