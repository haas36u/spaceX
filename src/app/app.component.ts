import {Component, OnInit} from '@angular/core';
import {SpacexApiService} from "./services/spacex-api-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private spacexService: SpacexApiService) {
  }

  ngOnInit(): void {
    this.spacexService.getCompanyInfo()
      .subscribe(data => {
        console.log(data);
      });

  }
}
