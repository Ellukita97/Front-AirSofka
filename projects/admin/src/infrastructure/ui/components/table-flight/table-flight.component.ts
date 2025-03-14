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
  IFlightUpdate,
  mapFlightToRequest,
} from '../../../../domain/model/flight.model';
import { ModalComponent } from 'shared';
import { CreateFlightComponent } from '../../forms/create-flight/create-flight.component';
import { UpdateFlightComponent } from '../../forms/update-flight/update-flight.component';

@Component({
  selector: 'lib-table-flight',
  imports: [
    CurrencyPipe,
    DatePipe,
    ModalComponent,
    CreateFlightComponent,
    UpdateFlightComponent,
  ],
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
  public flightCurrent: IFlight;
  public currentFlight = input<IFlight>();
  public onSelectOrder = output<string>();

  @Output() removedFlight = new EventEmitter<string>();
  @Output() createdFlight = new EventEmitter<IFlightRequest>();
  @Output() updatedFlight = new EventEmitter<IFlightUpdate>();

  @ViewChild(CreateFlightComponent)
  createFlightComponent!: CreateFlightComponent;
  @ViewChild(UpdateFlightComponent)
  updateFlightComponent!: UpdateFlightComponent;

  public sent: boolean = false;

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
    const flight = this.findFlight(flightId);
    this.removedFlight.emit(flight.flightId);
  }
  createFlights(flight: IFlightRequest) {
    this.createdFlight.emit(flight);
  }
  updateFlight(flight: IFlightUpdate) {
    this.updatedFlight.emit(flight);
  }
  sendData(flightNumber: string) {
    if (!this.sent) {
      this.flightCurrent = this.findFlight(flightNumber);
      this.onSelectOrder.emit(this.flightCurrent.flightId);
      console.log(this.currentFlight());
      this.sent = true;
    }
  }
  confirma() {
    if (this.createFlightComponent) {
      this.createFlightComponent.submit();
    }
  }
  confirmUpdate() {
    if (this.updateFlightComponent) {
      this.updateFlightComponent.submit();
    }
  }
  cancel() {
    console.log('cancel');
  }

  findFlight(flightNumber: string): IFlight | null {
    return this.dataFlight().find(
      (flight) => flight.flightNumber === flightNumber
    );
  }
}
