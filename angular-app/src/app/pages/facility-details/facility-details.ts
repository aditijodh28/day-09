import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Facility } from '../../models/facility.model';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getFacilities(): Observable<Facility[]> {

    console.log(
      'Calling API:',
      `${this.apiUrl}/facilities`
    );

    return this.http.get<Facility[]>(
      `${this.apiUrl}/facilities`
    );
  }
}