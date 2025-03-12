import { Routes } from '@angular/router';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
import { ReservaContainerComponent } from '../container/reserva-container/reserva-container.component';
import { ListFlightsComponent } from '../container/list-flights/list-flights.component';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: ListFlightsComponent,
        outlet: 'accordion',
      },
      {
        path: 'vuelos',
        component: ListFlightsComponent,
        outlet:'table'
      },
    ], 
  },
];
