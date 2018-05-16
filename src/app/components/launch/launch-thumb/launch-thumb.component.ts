import { Component, OnInit, Input } from '@angular/core';
import { Launch } from '../../../models/launch';

@Component({
  selector: 'app-launch-thumb',
  templateUrl: './launch-thumb.component.html',
  styleUrls: ['./launch-thumb.component.scss']
})
export class LaunchThumbComponent implements OnInit {

  @Input() launch: Launch;

  constructor() { }

  ngOnInit() {
  }

}
