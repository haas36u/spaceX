import { Component, OnInit } from '@angular/core';
import {SpacexApiService} from "../../../services/spacex-api.service";
import {Capsule} from "../../../models/capsule";

@Component({
  selector: 'app-capsule-list',
  templateUrl: './capsule-list.component.html',
  styleUrls: ['./capsule-list.component.css']
})
export class CapsuleListComponent implements OnInit {

  public capsules: Capsule[];

  constructor(private spacexApi: SpacexApiService) { }

  ngOnInit() {
    this.spacexApi.getCapsules()
      .subscribe(capsules => this.capsules = capsules);
  }

}
