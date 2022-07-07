import { TestBed } from '@angular/core/testing';

import { OwnerHomeService } from './owner-home.service';

describe('OwnerHomeService', () => {
  let service: OwnerHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnerHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
