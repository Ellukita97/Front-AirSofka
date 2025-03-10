import { Routes } from '@angular/router';
import { BodyLayoutComponent } from 'shared';

export const routes: Routes = [
  {
    path: 'Admin',
    loadChildren: () => import('admin').then((m) => m.adminRoutes),
  },
  {
    path: '',
    component: BodyLayoutComponent,
    loadChildren: () => import('home').then((m) => m.routes),
  },
];
