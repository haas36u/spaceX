import {Component, Input, OnInit} from '@angular/core';
import {Rocket} from "../../../models/rocket";

@Component({
  selector: 'app-rocket-thumb',
  templateUrl: './rocket-thumb.component.html',
  styleUrls: ['./rocket-thumb.component.css']
})
export class RocketThumbComponent implements OnInit {

  @Input() rocket: Rocket;

  constructor() { }

  ngOnInit() {
  }


}
