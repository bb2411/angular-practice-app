import { TestBed } from '@angular/core/testing';

import { StdDataService } from './std-data.service';

describe('StdDataService', () => {
  let service: StdDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StdDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
