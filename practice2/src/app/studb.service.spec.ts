import { TestBed } from '@angular/core/testing';

import { StudbService } from './studb.service';

describe('StudbService', () => {
  let service: StudbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
