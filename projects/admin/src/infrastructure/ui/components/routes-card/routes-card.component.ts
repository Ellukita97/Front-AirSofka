import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IRoute } from '../../../../domain/model/route.model';

@Component({
  selector: 'lib-routes-card',
  templateUrl: './routes-card.component.html',
  styleUrls: ['./routes-card.component.scss'],
})
export class RoutesCardComponent {
  @Input() routes: IRoute[] = [];
  @Output() editRoute = new EventEmitter<IRoute>();
  @Output() deleteRoute = new EventEmitter<IRoute>();
  selectedRoute: IRoute | null = null;

  // Lógica para editar la ruta
  editRouteHandler(route: IRoute) {
    const confirmEdit = confirm(
      '¿Estás seguro de que deseas editar esta ruta?'
    );
    if (confirmEdit) {
      this.selectedRoute = route;
      console.log('Editando ruta:', this.selectedRoute);
      this.editRoute.emit(route);
    }
  }

  // Lógica para eliminar la ruta
  deleteRouteHandler(route: IRoute) {
    const confirmDelete = confirm(
      '¿Estás seguro de que deseas eliminar esta ruta?'
    );
    if (confirmDelete) {
      this.selectedRoute = route;
      this.deleteRoute.emit(route);
    }
  }
}
