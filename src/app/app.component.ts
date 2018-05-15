import {Component, OnInit} from '@angular/core';
import {SpacexApiService} from "./services/spacex-api-service.service";
import {LaunchFilter, Order} from "./models/launchFilter";
import { Launch } from './models/launch';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	launch: Launch;

	constructor(private spacexService: SpacexApiService) {
	}

  ngOnInit(): void {
    this.spacexService.getRocket('falcon1')
      .subscribe(data => {
        console.log(data);
      })

		this.spacexService.getCompanyInfo()
		.subscribe(data => {
			console.log(data);
		})

		this.getLastLaunch();
	}

	getLastLaunch() : void{
		this.spacexService.getLastLaunch()
		.subscribe(data => {
			this.launch = data;
		})
	}
}
