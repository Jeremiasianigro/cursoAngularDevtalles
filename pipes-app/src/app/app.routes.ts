import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'basic',
    title: 'Pipes Basicos',
    loadComponent: () => import('./pages/basic-page/basic-page').then( c => c.default ),
  },
  {
    path: 'numbers',
    title: 'Pipes Numeros',
    loadComponent: () => import('./pages/numbers-page/numbers-page').then( c => c.default ),
  },
  {
    path: 'uncommon',
    title: 'Pipes No Comunes',
    loadComponent: () => import('./pages/uncommon-page/uncommon-page').then( c => c.default ),
  },
  {
    path: 'custom',
    title: 'Pipes Personalizados',
    loadComponent: () => import('./pages/custom-page/custom-page').then( c => c.default ),

  },
  {
    path: '**',
    redirectTo: 'basic',
  }


];
