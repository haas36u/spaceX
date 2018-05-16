import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SpacexApiService} from "../../../services/spacex-api.service";
import {Rocket} from "../../../models/rocket";
import {Launch} from "../../../models/launch";

@Component({
  selector: 'app-rocket-details',
  templateUrl: './rocket-details.component.html',
  styleUrls: ['./rocket-details.component.css']
})
export class RocketDetailsComponent implements OnInit {

  public rocket: Rocket = null;
  public launches: Launch[] = [];

  constructor(private route: ActivatedRoute, private spacexApi: SpacexApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.spacexApi.getRocket(params['id']).subscribe(rocket => this.rocket = rocket);
      this.spacexApi.getAllLaunches({rocket_id: params['id']})
        .subscribe(launches => this.launches = launches);
    });
  }

}
