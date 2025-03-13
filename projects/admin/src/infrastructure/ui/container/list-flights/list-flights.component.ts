import { Component, inject } from '@angular/core';
import { GetFlightsUsecase } from '../../../../application/get-flights.usecase';
import { Observable } from 'rxjs';
import { IFlight, IFlightRequest } from '../../../../domain/model/flight.model';
import { AsyncPipe } from '@angular/common';
import { TableFlightComponent } from '../../components/table-flight/table-flight.component';
import { RemoveFlightUsecase } from '../../../../application/remove-flight.usecase';
import { AddFlightUsecase } from '../../../../application/add-flight.usecase';

@Component({
  selector: 'lib-list-flights',
  imports: [TableFlightComponent,AsyncPipe],
  templateUrl: './list-flights.component.html',
})
export class ListFlightsComponent {
  private readonly __useCaseList = inject(GetFlightsUsecase);
  private readonly __useCaseRemoveFlight = inject(RemoveFlightUsecase);
  private readonly __useCaseAddFlight = inject(AddFlightUsecase);

  public flights$: Observable<IFlight[]>;
  ngOnInit(): void {
    this.__useCaseList.initSubscriptions();
    this.__useCaseAddFlight.initSubcription();
    this.__useCaseList.execute()
    this.flights$ = this.__useCaseList.flights$();
  }

  ngOnDestroy(): void {
    this.__useCaseList.destroySubscriptions();
    this.__useCaseAddFlight.destroySubscriptions();
  }

  removeFlight(flightId: string) {
    this.__useCaseRemoveFlight.execute(flightId);
  }
  createFlights(flight: IFlightRequest) {
    this.__useCaseAddFlight.execute(flight);
    console.log(flight);
    
  }
}
