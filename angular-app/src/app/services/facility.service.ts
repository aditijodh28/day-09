import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Facility } from '../models/facility.model';
import { Inspection } from '../models/inspection.model';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  // Get all facilities
  getFacilities(): Observable<Facility[]> {
    return this.http.get<Facility[]>(
      `${this.apiUrl}/facilities`
    );
  }

  // Get one facility
  getFacility(id: number): Observable<Facility> {
    return this.http.get<Facility>(
      `${this.apiUrl}/facilities/${id}`
    );
  }

  // Get inspection history
  getInspections(): Observable<Inspection[]> {
    return this.http.get<Inspection[]>(
      `${this.apiUrl}/inspections`
    );
  }

  // Create new inspection
  createInspection(
    inspection: Inspection
  ): Observable<Inspection> {
    return this.http.post<Inspection>(
      `${this.apiUrl}/inspections`,
      inspection
    );
  }
}