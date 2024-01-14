import { TestBed } from '@angular/core/testing';

import { CapitalesService } from './capitales.service';

describe('CapitalesService', () => {
  let service: CapitalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapitalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
