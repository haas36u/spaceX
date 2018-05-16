import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../../services/spacex-api.service';
import { Launch } from '../../../models/launch';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements OnInit {

  launches: Launch;

  constructor(private spacexApiService: SpacexApiService) { }

  ngOnInit() {
    return this.spacexApiService.getAllLaunches().subscribe(data => {
        this.launches = data;
        console.log(this.launches)
      }
    );
  }

}
