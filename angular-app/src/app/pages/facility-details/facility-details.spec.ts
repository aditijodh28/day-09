import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FacilityDetails } from './facility-details';

describe('FacilityDetails', () => {
  let component: FacilityDetails;
  let fixture: ComponentFixture<FacilityDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilityDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(FacilityDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
