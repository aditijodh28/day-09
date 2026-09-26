import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityService } from '../../services/facility.service';
import { Inspection } from '../../models/inspection.model';

@Component({
  selector: 'app-inspection-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inspection-history.html',
  styleUrl: './inspection-history.css'
})
export class InspectionHistory implements OnInit {

  inspections: Inspection[] = [];

  loading = true;
  error = '';

  constructor(
    private facilityService: FacilityService
  ) {}

  ngOnInit(): void {
    this.loadInspections();
  }

  loadInspections(): void {

    this.facilityService
      .getInspections()
      .subscribe({

        next: (data: Inspection[]) => {

          console.log(
            'INSPECTION DATA:',
            data
          );

          this.inspections = data;

          this.loading = false;
        },

        error: (error: any) => {

          console.error(
            'INSPECTION API ERROR:',
            error
          );

          this.loading = false;

          this.error =
            'Unable to load inspection history.';
        }

      });
  }
}