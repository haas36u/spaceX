import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../../services/spacex-api.service';
import { Launchpad } from '../../../models/launchpad';

@Component({
  selector: 'app-launchpad-list',
  templateUrl: './launchpad-list.component.html',
  styleUrls: ['./launchpad-list.component.css']
})
export class LaunchpadListComponent implements OnInit {

  private launchpads: Launchpad[] = [];

  constructor(private spacexApi: SpacexApiService) { }

  ngOnInit() {
    this.spacexApi.getLaunchpads().subscribe(launchpads => {
        this.launchpads = launchpads;
      }
    );
  }
}
