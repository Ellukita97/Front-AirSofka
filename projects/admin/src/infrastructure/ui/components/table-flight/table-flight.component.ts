import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { IFlight, IFlightRequest, mapFlightToRequest } from '../../../../domain/model/flight.model';
import { ButtonTableComponent } from 'shared';



@Component({
  selector: 'lib-table-flight',
  imports: [CurrencyPipe,DatePipe,ButtonTableComponent],
  templateUrl: './table-flight.component.html',
  styleUrl: './table-flight.component.scss'
})
export class TableFlightComponent {

  public dataFlight= input.required<IFlight[]>() ;
  public flightRequests: IFlightRequest[] =[]
  public deleteClient =  output<string>();
  // public createClient = output<IRequiredFlight>();
  ngOnInit(): void {
    console.log("asdasdasd");
    
    
  }

  get columnKeys(): string[] {
    if (this.dataFlight) {
      this.flightRequests = this.mapFlightsToRequests(this.dataFlight());
    }
    return this.flightRequests.length > 0 ? Object.keys(this.flightRequests[0]) : [];
   
  }
  images = [
    '/admin/form-svgrepo-com.svg#icon-delete',  
    '/admin/form-svgrepo-com.svg#icon-update'
    ];
  

     mapFlightsToRequests(flights: IFlight[]): IFlightRequest[] {
      return flights.map(mapFlightToRequest);
    }
}
