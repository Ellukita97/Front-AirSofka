import { Component } from '@angular/core';
import { FlightTypeComponent } from '../../components/flight-type/flight-type.component';

@Component({
  selector: 'lib-flight-selection',
  imports: [FlightTypeComponent],
  templateUrl: './flight-selection.component.html'
})
export class FlightSelectionComponent {

}
