import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../services/spacex-api.service';
import { Company } from '../../models/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  company: Company;

  constructor(private spacexApiService: SpacexApiService) { }

  ngOnInit() {
    this.spacexApiService.getCompanyInfo().subscribe(company => {
        this.company = company;
      }
    );
  }
}
