import { TestBed } from '@angular/core/testing';

import { GOwnerService } from './g-owner.service';

describe('GOwnerService', () => {
  let service: GOwnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GOwnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
