import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InspectionHistory } from './inspection-history';

describe('InspectionHistory', () => {
  let component: InspectionHistory;
  let fixture: ComponentFixture<InspectionHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspectionHistory],
    }).compileComponents();

    fixture = TestBed.createComponent(InspectionHistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
