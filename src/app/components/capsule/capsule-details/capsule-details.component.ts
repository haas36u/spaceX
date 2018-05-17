import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SpacexApiService} from "../../../services/spacex-api.service";
import {Capsule} from "../../../models/capsule";

@Component({
  selector: 'app-capsule-details',
  templateUrl: './capsule-details.component.html',
  styleUrls: ['./capsule-details.component.css']
})
export class CapsuleDetailsComponent implements OnInit {

  public capsule: Capsule;

  constructor(private route: ActivatedRoute, private spacexApi: SpacexApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.spacexApi.getCapsule(params['id']).subscribe(capsule => this.capsule = capsule);
    });
  }


}
