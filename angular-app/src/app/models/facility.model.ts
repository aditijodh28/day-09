export interface Facility {
  facility_id: number;
  location: string;
  cleanliness_score: number;
  odor_score: number;
  waste_level: number;
  water_availability: boolean;
  footfall: number;
  complaints: any[];
  inspection_date: string;
}