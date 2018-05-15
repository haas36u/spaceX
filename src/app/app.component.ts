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
	  this.spacexService.getCore('B1041')
      .subscribe(data => console.log(data));
	}
}
