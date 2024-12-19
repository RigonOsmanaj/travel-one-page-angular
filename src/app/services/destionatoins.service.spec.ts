import { TestBed } from '@angular/core/testing';

import { DestionatoinsService } from './destionatoins.service';

describe('DestionatoinsService', () => {
  let service: DestionatoinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestionatoinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
