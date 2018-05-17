import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexApiService } from '../../../services/spacex-api.service';
import { Core } from '../../../models/core';

@Component({
  selector: 'app-core-details',
  templateUrl: './core-details.component.html',
  styleUrls: ['./core-details.component.css']
})
export class CoreDetailsComponent implements OnInit {

  public core: Core = null;

  constructor(private route: ActivatedRoute, private spacexApi: SpacexApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.spacexApi.getCore(params['id']).subscribe(core => this.core = core);
    });
  }
}
