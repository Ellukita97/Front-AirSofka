import { Component, Input, ViewChild } from '@angular/core';
import { IRoute } from '../../../../domain/model/route.model';
import { ModalComponent } from 'shared';

@Component({
  selector: 'lib-routes-card',
  imports: [ModalComponent],
  templateUrl: './routes-card.component.html',
  styleUrls: ['./routes-card.component.scss'],
})
export class RoutesCardComponent {
  @Input() routes: IRoute[] = []; // Rutas que se muestran en las cards
  selectedRoute: IRoute | null = null; // Ruta seleccionada para editar/eliminar
  modalType: 'edit' | 'delete' | null = null; // Tipo de modal abierto

  @ViewChild(ModalComponent) modal!: ModalComponent; // Referencia al modal

  // Abre el modal de edición
  openEditModal(route: IRoute) {
    console.log('Abriendo modal de edición para:', route); // Verifica si se ejecuta
    this.selectedRoute = route;
    this.modalType = 'edit';
    this.modal.toggle(); // Abre el modal
  }

  // Abre el modal de eliminación
  openDeleteModal(route: IRoute) {
    console.log('Abriendo modal de eliminación para:', route); // Verifica si se ejecuta
    this.selectedRoute = route;
    this.modalType = 'delete';
    this.modal.toggle(); // Abre el modal
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
