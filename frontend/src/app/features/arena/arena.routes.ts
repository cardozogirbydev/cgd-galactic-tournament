import { Routes } from '@angular/router';

import { ArenaBoard } from './pages/arena-board/arena-board';

export const routes:Routes = [
  {
    path: '',
    component: ArenaBoard
  },
  {
    path: '**',
    redirectTo: ''
  }
];
