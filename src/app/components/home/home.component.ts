import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company';
import { SpacexApiService } from '../../services/spacex-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  company: Company = null;

  constructor(private spacexApiService: SpacexApiService) { }

  ngOnInit() {
    this.spacexApiService.getCompanyInfo().subscribe(company => {
        this.company = company;
      }
    );
  }

}
