import { TestBed } from '@angular/core/testing';
import { Facility } from './facility';

describe('Facility', () => {
  let service: Facility;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Facility);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
