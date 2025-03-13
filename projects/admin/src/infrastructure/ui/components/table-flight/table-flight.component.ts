import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, EventEmitter, input, Output, output } from '@angular/core';
import {
  IFlight,
  IFlightInfo,
  mapFlightToRequest,
} from '../../../../domain/model/flight.model';
import { ModalComponent } from 'shared';

@Component({
  selector: 'lib-table-flight',
  imports: [CurrencyPipe, DatePipe, ModalComponent],
  templateUrl: './table-flight.component.html',
  styleUrl: './table-flight.component.scss',
})
export class TableFlightComponent {
  images = [
    'admin/form-svgrepo-com.svg#icon-delete',
    'admin/form-svgrepo-com.svg#icon-update',
  ];

  public dataFlight = input.required<IFlight[]>();
  public deleteClient = output<string>();
  public flightRequests: IFlightInfo[] = [];
  @Output() removedFlight = new EventEmitter<string>();

  get columnKeys(): string[] {
    if (this.dataFlight) {
      this.flightRequests = this.mapFlightsToRequests(this.dataFlight());
    }
    return this.flightRequests.length > 0? Object.keys(this.flightRequests[0]): [];
  }


  mapFlightsToRequests(flights: IFlight[]): IFlightInfo[] {
    return flights.map(mapFlightToRequest);
  }
  removeFlight(flightId: string) {
    this.removedFlight.emit(this.findFlight(flightId));
  }
  confirma() {
    console.log('Confirmar');
  }
  cancel() {
    console.log('Confirmar');
  }

  findFlight(flightNumber: string): string | null {
    const flight = this.dataFlight().find(flight => flight.flightNumber === flightNumber);
    return flight ? flight.flightId : null;
  }
}
