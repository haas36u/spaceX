import { Component, OnInit } from '@angular/core';
import {SpacexApiService} from "../../../services/spacex-api.service";
import {Capsule, CapsuleDetails, CapsuleFilter} from "../../../models/capsule";

@Component({
  selector: 'app-capsule-list',
  templateUrl: './capsule-list.component.html',
  styleUrls: ['./capsule-list.component.css']
})
export class CapsuleListComponent implements OnInit {

  public capsules: CapsuleDetails[];

  constructor(private spacexApi: SpacexApiService) { }

  ngOnInit() {
    this.loadCapsules();
  }

  loadCapsules(filter: CapsuleFilter = {}) {
    this.spacexApi.getCapsulesDetails(filter)
      .subscribe(capsules => this.capsules = capsules);
  }

}
