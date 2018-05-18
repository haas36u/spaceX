import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CapsuleFilter} from "../../../models/capsule";

@Component({
  selector: 'app-capsule-filter',
  templateUrl: './capsule-filter.component.html',
  styleUrls: ['./capsule-filter.component.css']
})
export class CapsuleFilterComponent implements OnInit {

  @Output('capsuleFilter')
  capsuleFilter = new EventEmitter<CapsuleFilter>();

  public filter: CapsuleFilter = {};

  constructor() { }

  ngOnInit() {
  }

}
