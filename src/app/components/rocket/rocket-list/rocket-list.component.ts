import { Component, OnInit } from '@angular/core';
import {SpacexApiService} from "../../../services/spacex-api.service";
import {Rocket} from "../../../models/rocket";

@Component({
  selector: 'app-rocket-list',
  templateUrl: './rocket-list.component.html',
  styleUrls: ['./rocket-list.component.css']
})
export class RocketListComponent implements OnInit {

  constructor(private spacexApi: SpacexApiService) { }

  public rockets: Rocket[] = [];

  ngOnInit() {
    this.spacexApi.getRockets()
      .subscribe(rockets => {
        this.rockets = rockets;
        console.log(rockets)
      });
  }

}
