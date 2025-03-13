import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
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
  public dataFlight = input.required<IFlight[]>();
  public deleteClient = output<string>();
  public flightRequests: IFlightInfo[] = [];

  get columnKeys(): string[] {
    if (this.dataFlight) {
      this.flightRequests = this.mapFlightsToRequests(this.dataFlight());
    }
    return this.flightRequests.length > 0
      ? Object.keys(this.flightRequests[0])
      : [];
  }

  images = [
    'admin/form-svgrepo-com.svg#icon-delete',
    'admin/form-svgrepo-com.svg#icon-update',
  ];
  mapFlightsToRequests(flights: IFlight[]): IFlightInfo[] {
    return flights.map(mapFlightToRequest);
  }
  removeFlight(flightId: string) {
    console.log(flightId);
    console.log(this.findFlight(flightId));
  }
  confirma() {
    console.log('Confirmar');
  }
  cancel() {
    console.log('Confirmar');
  }

  findFlight(flightId: string) {
    return this.dataFlight().filter((flight) =>
      flight.flightNumber === flightId ? flight.flightId : null
    );
  }
}
