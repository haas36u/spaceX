import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../../services/spacex-api.service';
import { Launch } from '../../../models/launch';

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
    this.spacexApiService.getAllLaunches().subscribe(launches => {
        this.allLaunches = launches;
      }
    );

    this.spacexApiService.getPastLaunches().subscribe(launches => {
      this.pastLaunches = launches;
    });

    this.spacexApiService.getUpcomingLaunches().subscribe(launches => {
      this.upcomingLaunches = launches;
    });
  }

}
