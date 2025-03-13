import { Component, inject } from '@angular/core';
import { GetFlightsUsecase } from '../../../../application/get-flights.usecase';
import { Observable } from 'rxjs';
import { IFlight } from '../../../../domain/model/flight.model';
import { AsyncPipe } from '@angular/common';
import { TableFlightComponent } from '../../components/table-flight/table-flight.component';
import { RemoveFlightUsecase } from '../../../../application/remove-flight.usecase';

@Component({
  selector: 'lib-list-flights',
  imports: [TableFlightComponent,AsyncPipe],
  templateUrl: './list-flights.component.html',
})
export class ListFlightsComponent {
  private readonly __useCaseList = inject(GetFlightsUsecase);
  private readonly __useCaseRemoveFlight = inject(RemoveFlightUsecase);

  public flights$: Observable<IFlight[]>;
  ngOnInit(): void {
    this.__useCaseList.initSubscriptions();
    this.__useCaseList.execute()
    this.flights$ = this.__useCaseList.flights$();
 
    
  }

  ngOnDestroy(): void {
    this.__useCaseList.destroySubscriptions();
  }

  removeFlight(flightId: string) {
    this.__useCaseRemoveFlight.execute(flightId);
  }
}
