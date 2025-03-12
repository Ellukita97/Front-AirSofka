import { Component } from '@angular/core';
import { FlightTypeComponent } from '../../components/flight-type/flight-type.component';
import { FlightsComponent } from '../../components/flights/flights.component';

@Component({
  selector: 'lib-flight-selection',
  imports: [FlightTypeComponent, FlightsComponent],
  templateUrl: './flight-selection.component.html'
})
export class FlightSelectionComponent {

}
