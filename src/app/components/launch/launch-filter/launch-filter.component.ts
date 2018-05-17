import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LaunchFilter} from "../../../models/launch";
import {SpacexApiService} from "../../../services/spacex-api.service";
import {Rocket} from "../../../models/rocket";

@Component({
  selector: 'app-launch-filter',
  templateUrl: './launch-filter.component.html',
  styleUrls: ['./launch-filter.component.css']
})
export class LaunchFilterComponent implements OnInit {

  constructor(private spacexApi: SpacexApiService) { }

  @Output('filterLaunches')
  filterLaunches = new EventEmitter<LaunchFilter>();

  public rockets: Rocket[] = [];
  public filter: LaunchFilter = {};

  ngOnInit() {
    this.spacexApi.getRockets().subscribe(rockets => this.rockets = rockets);
  }

  onSubmit() {
    this.filterLaunches.emit(this.filter);
  }

  reset() {
    this.filter = {};
    this.filterLaunches.emit(this.filter);
  }

}
