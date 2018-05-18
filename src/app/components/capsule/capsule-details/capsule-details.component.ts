import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SpacexApiService} from "../../../services/spacex-api.service";
import {Capsule, CapsuleDetails} from "../../../models/capsule";

@Component({
  selector: 'app-capsule-details',
  templateUrl: './capsule-details.component.html',
  styleUrls: ['./capsule-details.component.css']
})
export class CapsuleDetailsComponent implements OnInit {

  public capsule: CapsuleDetails = null;
  public caps: Capsule = null;

  constructor(private route: ActivatedRoute, private spacexApi: SpacexApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.spacexApi.getCapsuleDetails(params['id']).subscribe(capsule => {
        this.capsule = capsule;
        this.spacexApi.getCapsule(capsule.capsule_id).subscribe(caps => this.caps = caps);
      });
    });
  }


}
