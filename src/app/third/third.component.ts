import { Component, OnInit, OnDestroy} from '@angular/core';
import {TimetrackingService} from "../timetracking.service";


@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(public ttService:TimetrackingService) { }

  ngOnInit(): void {
    this.ttService.startThird();
  }

  ngOnDestroy():void {
    this.ttService.stopThird();
  }

}
