import {Component, OnInit} from '@angular/core';
import {SpacexApiService} from '../../services/spacex-api.service';
import {Company} from '../../models/company';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})

export class CompanyComponent implements OnInit {
  public company: Company = null;


  constructor(private spacexApiService: SpacexApiService) {
  }

  ngOnInit() {
    this.spacexApiService.getCompanyInfo().subscribe(company => {
        this.company = company;
      }
    );

  }
}
