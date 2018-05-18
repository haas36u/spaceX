import {Component, Input, OnInit} from '@angular/core';
import {Capsule, CapsuleDetails} from "../../../models/capsule";

@Component({
  selector: 'app-capsule-thumb',
  templateUrl: './capsule-thumb.component.html',
  styleUrls: ['./capsule-thumb.component.css']
})
export class CapsuleThumbComponent implements OnInit {

  @Input() capsule: CapsuleDetails;

  constructor() { }

  ngOnInit() {
  }

}
