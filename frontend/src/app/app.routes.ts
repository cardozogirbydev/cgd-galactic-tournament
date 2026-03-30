import { Routes } from '@angular/router';

import { Home } from '@features/home/home';

export const routes:Routes = [
  {
    path: 'ranking',
    loadChildren: () => import('./features/ranking/ranking.routes').then(m => m.routes)
  },
  {
    path: 'arena',
    loadChildren: () => import('./features/arena/arena.routes').then(m => m.routes)
  },
  {
    path: 'species',
    loadChildren: () => import('./features/species/species.routes').then(m => m.routes)
  },
  {
    path: '',
    component: Home
  },
  {
    path: '**',
    redirectTo: ''
  }
];
