import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-control-route',
  imports: [ReactiveFormsModule],
  templateUrl: './control-route.component.html',
  styleUrl: './control-route.component.scss'
})
export class ControlRouteComponent {
  public flightsList = [
    {
      origin: "Dow",
      duration: 5,
      destination: "sdsd",
      routeId: "sdasdasdad"
    },
    {
      origin: "NYC",
      duration: 3,
      destination: "LAX",
      routeId: "abcd1234"
    },
    {
      origin: "Paris",
      duration: 7,
      destination: "London",
      routeId: "xyz9876"
    },
    {
      origin: "Tokyo",
      duration: 10,
      destination: "Seoul",
      routeId: "qwert5678"
    }
  ];
@Input() Route: string;
@Input() formGroup!: FormGroup;
// @Output() clientSelected = new EventEmitter<number>();

onRouteChange(event: Event) {
  const selectElement = event.target as HTMLSelectElement;
  const selectedDishId = selectElement.value;
  console.log(selectedDishId);
  // this.clientSelected.emit(parseFloat(selectedDishId));
}

}
