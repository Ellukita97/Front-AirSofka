import { Component, input } from '@angular/core';
import { IReservationData } from '../../../../domain/model/reservation.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  detailsData = input<IReservationData>();
  isPopupVisible = false;

  showPopup() {
    this.isPopupVisible = true;
  }

  onConfirm() {
    console.log('Reserva confirmada');
    this.isPopupVisible = false;
  }

  onCancel() {
    console.log('Operación cancelada');
    this.isPopupVisible = false;
  }
}


