import { TestBed } from '@angular/core/testing';

import { EmpDbDataService } from './emp-db-data.service';

describe('EmpDbDataService', () => {
  let service: EmpDbDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpDbDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
