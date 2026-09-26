import { Routes } from '@angular/router';

import { Dashboard } from './pages/dashboard/dashboard';
import { Facilities } from './pages/facilities/facilities';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    component: Dashboard
  },

  {
    path: 'facilities',
    component: Facilities
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }
];