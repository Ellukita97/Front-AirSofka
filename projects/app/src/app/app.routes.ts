import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'Admin',
        loadChildren: () => import('admin').then(m => m.adminRoutes)              
    }
];
