import { TestBed } from '@angular/core/testing';

import { SdataService } from './sdata.service';

describe('SdataService', () => {
  let service: SdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
