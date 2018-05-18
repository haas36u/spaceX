import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Capsule, CapsuleFilter} from "../../../models/capsule";
import {SpacexApiService} from "../../../services/spacex-api.service";

@Component({
  selector: 'app-capsule-filter',
  templateUrl: './capsule-filter.component.html',
  styleUrls: ['./capsule-filter.component.css']
})
export class CapsuleFilterComponent implements OnInit {

  @Output('filterCapsule')
  filterCapsule = new EventEmitter<CapsuleFilter>();

  public filter: CapsuleFilter = {};
  public types: Capsule[];
  public status = ['active', 'destroyed', 'unknown', 'retired'];

  constructor(private spacexApi: SpacexApiService) { }

  ngOnInit() {
    this.spacexApi.getCapsules().subscribe(types => this.types = types);
  }

  onSubmit() {
    this.filterCapsule.emit(this.filter);
  }

  reset() {
    this.filter = {};
    this.filterCapsule.emit(this.filter);
  }
}
