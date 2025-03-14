import { Component, inject } from '@angular/core';
import { GetFlightsUsecase } from '../../../../application/get-flights.usecase';
import { Observable } from 'rxjs';
import {
  IFlight,
  IFlightRequest,
  IFlightUpdate,
} from '../../../../domain/model/flight.model';
import { AsyncPipe } from '@angular/common';
import { TableFlightComponent } from '../../components/table-flight/table-flight.component';
import { RemoveFlightUsecase } from '../../../../application/remove-flight.usecase';
import { AddFlightUsecase } from '../../../../application/add-flight.usecase';
import { UpdateFlightUsecase } from '../../../../application/update-flight.usecase';

@Component({
  selector: 'lib-list-flights',
  imports: [TableFlightComponent, AsyncPipe],
  templateUrl: './list-flights.component.html',
})
export class ListFlightsComponent {
  private readonly __useCaseList = inject(GetFlightsUsecase);
  private readonly __useCaseRemoveFlight = inject(RemoveFlightUsecase);
  private readonly __useCaseAddFlight = inject(AddFlightUsecase);
  private readonly __useCaseUpdateFlight = inject(UpdateFlightUsecase);

  public flights$: Observable<IFlight[]>;
  public currentFlight$: Observable<IFlight>;
  ngOnInit(): void {
    this.__useCaseList.initSubscriptions();
    this.__useCaseAddFlight.initSubcription();
    this.__useCaseUpdateFlight.initSubscriptions();
    this.__useCaseList.execute();
    this.flights$ = this.__useCaseList.flights$();
    this.currentFlight$ = this.__useCaseUpdateFlight.currentFlight$();
  }

  ngOnDestroy(): void {
    this.__useCaseList.destroySubscriptions();
    this.__useCaseAddFlight.destroySubscriptions();
    this.__useCaseUpdateFlight.destroySubscriptions();
  }

  removeFlight(flightId: string) {
    this.__useCaseRemoveFlight.execute(flightId);
  }
  createFlights(flight: IFlightRequest) {
    this.__useCaseAddFlight.execute(flight);
    console.log(flight);
    this.refreshFlights();
  }
  updateFlight(flight: IFlightUpdate) {
    this.__useCaseUpdateFlight.execute(flight);
    this.refreshFlights();
  }
  selectFlight(id: string) {
    this.__useCaseUpdateFlight.selectFlight$(id);
    
  }
  private loadFlights() {
    this.__useCaseList.execute();
    this.flights$ = this.__useCaseList.flights$();
    this.currentFlight$ = this.__useCaseUpdateFlight.currentFlight$();
  }
  private refreshFlights() {
    setTimeout(() => {
      this.loadFlights(); 
    }, 500); 
  }
  


}
