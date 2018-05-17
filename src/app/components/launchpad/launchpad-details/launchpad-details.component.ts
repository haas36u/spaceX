import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexApiService } from '../../../services/spacex-api.service';
import { Launchpad } from '../../../models/launchpad';

@Component({
  selector: 'app-launchpad-details',
  templateUrl: './launchpad-details.component.html',
  styleUrls: ['./launchpad-details.component.css']
})
export class LaunchpadDetailsComponent implements OnInit {

  public launchpad: Launchpad = null;

  constructor(private route: ActivatedRoute, private spacexApi: SpacexApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.spacexApi.getLaunchpad(params['id']).subscribe(launchpad => this.launchpad = launchpad);
    });
  }
}
