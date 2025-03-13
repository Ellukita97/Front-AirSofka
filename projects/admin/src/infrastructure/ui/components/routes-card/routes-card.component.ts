import { Component, Input } from '@angular/core';
import { IRoute } from '../../../../domain/model/route.model';
import { ModalComponent } from 'shared';

@Component({
  selector: 'lib-routes-card',
  imports: [ModalComponent],
  templateUrl: './routes-card.component.html',
  styleUrls: ['./routes-card.component.scss'],
})
export class RoutesCardComponent {
  @Input() routes: IRoute[] = [];
  selectedRoute: IRoute | null = null; // Ruta seleccionada para editar/eliminar
  modalType: 'edit' | 'delete' | null = null; // Tipo de modal abierto

  // Abre el modal de edición
  openEditModal(route: IRoute) {
    this.selectedRoute = route;
    this.modalType = 'edit';
  }

  // Abre el modal de eliminación
  openDeleteModal(route: IRoute) {
    this.selectedRoute = route;
    this.modalType = 'delete';
  }

  // Cierra el modal
  closeModal() {
    this.selectedRoute = null;
    this.modalType = null;
  }

  // Lógica para editar la ruta
  editRoute() {
    if (this.selectedRoute) {
      console.log('Editando ruta:', this.selectedRoute);
      // Aquí puedes agregar la lógica para editar la ruta
      this.closeModal();
    }
  }

  // Lógica para eliminar la ruta
  deleteRoute() {
    if (this.selectedRoute) {
      console.log('Eliminando ruta:', this.selectedRoute);
      // Aquí puedes agregar la lógica para eliminar la ruta
      this.closeModal();
    }
  }
}