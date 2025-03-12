import { Component } from '@angular/core';
import { FlightInfoComponent } from '../flight-info/flight-info.component';

@Component({
  selector: 'lib-flights',
  imports: [FlightInfoComponent],
  templateUrl: './flights.component.html',
  styleUrl: './flights.component.scss'
})
export class FlightsComponent {

}
