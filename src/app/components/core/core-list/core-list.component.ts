import { Component, OnInit } from '@angular/core';
import { Core } from '../../../models/core';
import { SpacexApiService } from '../../../services/spacex-api.service';

@Component({
  selector: 'app-core-list',
  templateUrl: './core-list.component.html',
  styleUrls: ['./core-list.component.css']
})
export class CoreListComponent implements OnInit {

  private cores: Core[] = [];

  constructor(private spacexApiService: SpacexApiService) { }

  ngOnInit() {
    this.spacexApiService.getCores().subscribe(cores => {
        this.cores = cores;
      }
    );
  }
}