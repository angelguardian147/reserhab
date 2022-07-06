import { TestBed } from '@angular/core/testing';

import { GReserverService } from './g-reserver.service';

describe('GReserverService', () => {
  let service: GReserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GReserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
