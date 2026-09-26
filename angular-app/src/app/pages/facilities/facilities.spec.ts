import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FacilityService } from '../../services/facility.service';
import { Facility } from '../../models/facility.model';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './facilities.component.html',
  styleUrl: './facilities.component.css'
})
export class FacilitiesComponent implements OnInit {

  facilities: Facility[] = [];
  filteredFacilities: Facility[] = [];

  searchText = '';
  waterFilter = 'all';
  sortField = 'facility_id';

  loading = false;
  error = '';

  constructor(
    private facilityService: FacilityService
  ) {}

  ngOnInit(): void {
    this.loadFacilities();
  }

  loadFacilities(): void {

    this.loading = true;

    this.facilityService.getFacilities().subscribe({

      next: (data) => {

        this.facilities = data;
        this.filteredFacilities = data;

        this.loading = false;

      },

      error: () => {

        this.error = 'Failed to load facilities.';
        this.loading = false;

      }

    });
  }

  applyFilters(): void {

    let result = [...this.facilities];

    if (this.searchText.trim()) {

      const search =
        this.searchText.toLowerCase();

      result = result.filter(f =>
        f.location.toLowerCase().includes(search)
      );
    }

    if (this.waterFilter === 'available') {

      result = result.filter(
        f => f.water_availability
      );

    } else if (this.waterFilter === 'not-available') {

      result = result.filter(
        f => !f.water_availability
      );
    }

    result.sort((a, b) => {

      if (this.sortField === 'cleanliness') {
        return b.cleanliness_score -
               a.cleanliness_score;
      }

      if (this.sortField === 'complaints') {
        return b.complaints -
               a.complaints;
      }

      return a.facility_id -
             b.facility_id;
    });

    this.filteredFacilities = result;
  }
}