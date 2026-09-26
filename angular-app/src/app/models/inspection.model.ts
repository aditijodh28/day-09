export interface Inspection {
  id?: number;
  facility_id: number;
  cleanliness_score: number;
  odor_score: number;
  waste_level: number;
  water_availability: boolean;
  complaints: number;
  inspection_date: string;
  remarks?: string;
}