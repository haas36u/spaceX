import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SpacexApiService} from "../../../services/spacex-api.service";
import {Rocket} from "../../../models/rocket";

@Component({
  selector: 'app-rocket-details',
  templateUrl: './rocket-details.component.html',
  styleUrls: ['./rocket-details.component.css']
})
export class RocketDetailsComponent implements OnInit {

  public rocket: Rocket;

  constructor(private route: ActivatedRoute, private spacexApi: SpacexApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.spacexApi.getRocket(params['id']).subscribe(rocket => this.rocket = rocket);
    });
  }

}
