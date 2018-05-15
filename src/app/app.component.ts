import {Component, OnInit} from '@angular/core';
import {SpacexApiService} from "./services/spacex-api.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	constructor(private spacexService: SpacexApiService) {
	}

  ngOnInit(): void {
	  this.spacexService.getCores()
      .subscribe(data => console.log(data));
	}
}
