import { TestBed } from '@angular/core/testing';

import { DestinationsService } from './destionatoins.service';

describe('DestinationService', () => {
  let service: DestinationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
