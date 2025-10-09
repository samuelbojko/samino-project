import { TestBed } from '@angular/core/testing';

import { Questservice } from './questservice';

describe('Questservice', () => {
  let service: Questservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Questservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
