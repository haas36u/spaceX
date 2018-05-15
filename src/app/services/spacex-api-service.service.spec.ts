import { TestBed, inject } from '@angular/core/testing';

import { SpacexApiServiceService } from './spacex-api-service.service';

describe('SpacexApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpacexApiServiceService]
    });
  });

  it('should be created', inject([SpacexApiServiceService], (service: SpacexApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
