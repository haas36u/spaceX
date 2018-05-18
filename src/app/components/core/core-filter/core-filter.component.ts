import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CoreFilter, Core } from '../../../models/core';
import { SpacexApiService } from '../../../services/spacex-api.service';

@Component({
  selector: 'app-core-filter',
  templateUrl: './core-filter.component.html',
  styleUrls: ['./core-filter.component.css']
})
export class CoreFilterComponent implements OnInit {

  @Output('filterCore')
  filterCore = new EventEmitter<CoreFilter>();

  private filter: CoreFilter = {}; 
  public types = ['active', 'destroyed', 'expended', 'retired'];
  public missions = [];

  constructor(private spacexApiService: SpacexApiService) { }

  ngOnInit() {
    this.spacexApiService.getCores().subscribe(cores => {
        for(var i = 0; i < cores.length; i++){
          for(var j = 0; j < cores[i].missions.length; j++){
            this.missions.push(cores[i].missions[j]);
          }
        }
      }
    );
  }

  onSubmit(): void{
    this.filterCore.emit(this.filter);
  }

  reset(): void{
    this.filter = {};
    this.filterCore.emit(this.filter);
  }
}
