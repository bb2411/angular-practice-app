import { TestBed } from '@angular/core/testing';

import { GetxlsService } from './getxls.service';

describe('GetxlsService', () => {
  let service: GetxlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetxlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
