import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  input,
  Output,
  output,
  ViewChild,
} from '@angular/core';
import {
  IFlight,
  IFlightInfo,
  IFlightRequest,
  mapFlightToRequest,
} from '../../../../domain/model/flight.model';
import { ModalComponent } from 'shared';
import { CreateFlightComponent } from '../../forms/create-flight/create-flight.component';

@Component({
  selector: 'lib-table-flight',
  imports: [CurrencyPipe, DatePipe, ModalComponent, CreateFlightComponent],
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
  @Output() createdFlight = new EventEmitter<IFlightRequest>();
  @ViewChild(CreateFlightComponent)
  createFlightComponent!: CreateFlightComponent;
  public createOrderData = output<IFlightRequest>();

  get columnKeys(): string[] {
    if (this.dataFlight) {
      this.flightRequests = this.mapFlightsToRequests(this.dataFlight());
    }
    return this.flightRequests.length > 0
      ? Object.keys(this.flightRequests[0])
      : [];
  }
  mapFlightsToRequests(flights: IFlight[]): IFlightInfo[] {
    return flights.map(mapFlightToRequest);
  }

  removeFlight(flightId: string) {
    this.removedFlight.emit(this.findFlight(flightId));
  }
  createFlights(flight: IFlightRequest) {
    this.createdFlight.emit(flight);
  }

  confirma() {
    console.log('asdadasdasd');

    if (this.createFlightComponent) {
      this.createFlightComponent.submit();
    }
  }
  cancel() {
    console.log('Confirmar');
  }

  findFlight(flightNumber: string): string | null {
    const flight = this.dataFlight().find(
      (flight) => flight.flightNumber === flightNumber
    );
    return flight ? flight.flightId : null;
  }
}
