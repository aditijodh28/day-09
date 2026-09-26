import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilityService } from '../../services/facility.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  totalFacilities = 0;
  averageCleanliness = 0;
  totalComplaints = 0;
  waterAvailable = 0;

  loading = true;
  error = '';

  constructor(
    private facilityService: FacilityService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadDashboard();
  }

  loadDashboard(): void {

    console.log('Calling API...');

    this.facilityService.getFacilities().subscribe({

      next: (data: any[]) => {

        console.log('FULL API DATA:', data);

        // Total facilities
        this.totalFacilities = data.length;

        // Average cleanliness
        const cleanlinessTotal = data.reduce(
          (sum, facility) =>
            sum + Number(facility.cleanliness_score || 0),
          0
        );

        this.averageCleanliness =
          data.length > 0
            ? cleanlinessTotal / data.length
            : 0;

        // Total complaints
        this.totalComplaints = data.reduce(
          (total, facility) => {

            if (Array.isArray(facility.complaints)) {
              return total + facility.complaints.length;
            }

            return total;
          },
          0
        );

        // Water available
        this.waterAvailable = data.filter(
          facility =>
            Number(facility.water_availability) === 1 ||
            facility.water_availability === true
        ).length;

        // Stop loading
        this.loading = false;

        console.log('TOTAL FACILITIES:', this.totalFacilities);
        console.log('AVERAGE CLEANLINESS:', this.averageCleanliness);
        console.log('TOTAL COMPLAINTS:', this.totalComplaints);
        console.log('WATER AVAILABLE:', this.waterAvailable);
        console.log('LOADING:', this.loading);

        // Force Angular to update the screen
        this.cdr.detectChanges();
      },

      error: (error: any) => {

        console.error('API ERROR:', error);

        this.loading = false;
        this.error = 'Unable to load dashboard data.';

        this.cdr.detectChanges();
      }

    });
  }
}