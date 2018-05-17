import { Component, OnInit, Input } from '@angular/core';
import { Launchpad } from '../../../models/launchpad';

@Component({
  selector: 'app-launchpad-thumb',
  templateUrl: './launchpad-thumb.component.html',
  styleUrls: ['./launchpad-thumb.component.css']
})
export class LaunchpadThumbComponent implements OnInit {

  @Input() launchpad: Launchpad;

  constructor() { }

  ngOnInit() {
  }

}
