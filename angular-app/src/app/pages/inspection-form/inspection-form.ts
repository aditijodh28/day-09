import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { FacilityService } from '../../services/facility.service';

@Component({
  selector: 'app-inspection-form',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './inspection-form.html',
  styleUrl: './inspection-form.css'
})
export class InspectionForm {

  submitted = false;
  message = '';
  error = '';

  inspectionForm;

  constructor(
    private fb: FormBuilder,
    private facilityService: FacilityService
  ) {

    this.inspectionForm = this.fb.group({

      facility_id: [
        1,
        [Validators.required]
      ],

      cleanliness_score: [
        0,
        [
          Validators.required,
          Validators.min(0),
          Validators.max(100)
        ]
      ],

      odor_score: [
        0,
        [
          Validators.required,
          Validators.min(0),
          Validators.max(100)
        ]
      ],

      waste_level: [
        0,
        [
          Validators.required,
          Validators.min(0),
          Validators.max(100)
        ]
      ],

      water_availability: [
        true,
        Validators.required
      ],

      complaints: [
        0,
        [
          Validators.required,
          Validators.min(0)
        ]
      ],

      inspection_date: [
        '',
        Validators.required
      ],

      remarks: ['']

    });

  }

  submit(): void {

    this.submitted = true;

    if (this.inspectionForm.invalid) {
      return;
    }

    this.facilityService
  .createInspection(
    this.inspectionForm.value as any
  )
  .subscribe({

    next: (response: any) => {

      console.log(
        'Inspection created:',
        response
      );

      this.message =
        'Inspection submitted successfully.';

      this.error = '';

    },

    error: (err: any) => {

      console.error(
        'Inspection error:',
        err
      );

      this.error =
        'Unable to submit inspection.';

      this.message = '';

    }

  });
  }
}