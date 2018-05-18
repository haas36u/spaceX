import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company';
import { SpacexApiService } from '../../services/spacex-api.service';
import { Launch } from '../../models/launch';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  company: Company = null;
  launch: Launch[] = [];

  constructor(private spacexApiService: SpacexApiService) { }

  ngOnInit() {
    this.spacexApiService.getCompanyInfo().subscribe(company => {
      this.company = company;
    });

    this.spacexApiService.getLastestLaunch().subscribe(launch => {
      this.launch.push(launch);
    });
  }
}
