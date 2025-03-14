import { Routes } from '@angular/router';
import { BodyLayoutComponent } from 'shared';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('admin').then((m) => m.adminRoutes),
  },
  {  
    path: '',
    component: BodyLayoutComponent,
    loadChildren: () => import('availability').then((m) => m.routes),     
  },
  {
    path: 'users',
    component: BodyLayoutComponent,
    loadChildren: () => import('authentication').then((m) => m.authRoutes),
  }
];
