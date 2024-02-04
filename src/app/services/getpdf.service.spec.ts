import { TestBed } from '@angular/core/testing';

import { GetpdfService } from './getpdf.service';

describe('GetpdfService', () => {
  let service: GetpdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetpdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
