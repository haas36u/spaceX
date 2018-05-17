import { Component, OnInit, Input } from '@angular/core';
import { Core } from '../../../models/core';

@Component({
  selector: 'app-core-thumb',
  templateUrl: './core-thumb.component.html',
  styleUrls: ['./core-thumb.component.css']
})
export class CoreThumbComponent implements OnInit {

  @Input() core: Core;

  constructor() { }

  ngOnInit() {
  }

}
