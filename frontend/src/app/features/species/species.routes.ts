import { Routes } from '@angular/router';

export const routes:Routes = [
  {
    path: '',
    loadComponent: () => import ('./pages/species-list/species-list').then(m => m.SpeciesList)
  },
  {
    path: 'form',
    loadComponent: () => import ('./pages/species-form/species-form').then(m => m.SpeciesForm)
  }
];
