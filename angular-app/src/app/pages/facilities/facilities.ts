import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { FacilityService } from '../../services/facility.service';
import { Facility } from '../../models/facility.model';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './facilities.html',
  styleUrl: './facilities.css'
})
export class Facilities implements OnInit {

  facilities: Facility[] = [];
  filteredFacilities: Facility[] = [];

  searchText = '';
  waterFilter = 'all';
  sortField = 'facility_id';

  loading = true;
  error = '';

  constructor(
    private facilityService: FacilityService
  ) {}

  ngOnInit(): void {
    this.loadFacilities();
  }

  loadFacilities(): void {

    this.facilityService.getFacilities().subscribe({

      next: (data: Facility[]) => {

        console.log('FACILITIES:', data);

        this.facilities = data;
        this.filteredFacilities = data;

        this.loading = false;

      },

      error: (error) => {

        console.error('FACILITIES API ERROR:', error);

        this.loading = false;

        this.error =
          'Unable to load facilities.';
      }

    });
  }

  applyFilters(): void {

    let result = [...this.facilities];

    if (this.searchText.trim()) {

      const search =
        this.searchText.toLowerCase();

      result = result.filter(f =>
        f.location
          .toLowerCase()
          .includes(search)
      );
    }

    if (this.waterFilter === 'available') {

      result = result.filter(
        f => f.water_availability === true
      );

    } else if (this.waterFilter === 'not-available') {

      result = result.filter(
        f => f.water_availability === false
      );
    }

    result.sort((a, b) => {

      if (this.sortField === 'cleanliness') {
        return Number(b.cleanliness_score) -
               Number(a.cleanliness_score);
      }

      if (this.sortField === 'complaints') {
        return Number(b.complaints) -
               Number(a.complaints);
      }

      return Number(a.facility_id) -
             Number(b.facility_id);
    });

    this.filteredFacilities = result;
  }
}