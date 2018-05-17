import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../../services/spacex-api.service';
import {Launch, LaunchFilter, Order} from '../../../models/launch';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.scss']
})
export class LaunchListComponent implements OnInit {

  allLaunches: Launch[] = [];
  pastLaunches: Launch[] = [];
  upcomingLaunches: Launch[] = [];

  constructor(private spacexApiService: SpacexApiService) { }

  ngOnInit() {
    this.loadLaunches();
  }

  loadLaunches(filter: LaunchFilter = {}) {
    filter = { ...filter, order: Order.desc};
    this.spacexApiService.getAllLaunches(filter).subscribe(launches => {
        this.allLaunches = launches;
      }
    );

    this.spacexApiService.getPastLaunches(filter).subscribe(launches => {
      this.pastLaunches = launches;
    });

    filter = { ...filter, order: Order.asc};
    this.spacexApiService.getUpcomingLaunches(filter).subscribe(launches => {
      this.upcomingLaunches = launches;
    });
  }

}
