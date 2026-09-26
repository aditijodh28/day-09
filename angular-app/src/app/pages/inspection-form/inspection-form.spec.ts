import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InspectionForm } from './inspection-form';

describe('InspectionForm', () => {
  let component: InspectionForm;
  let fixture: ComponentFixture<InspectionForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspectionForm],
    }).compileComponents();

    fixture = TestBed.createComponent(InspectionForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
