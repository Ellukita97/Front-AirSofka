import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-trip-options',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './trip-options.component.html',
  styleUrls: ['./trip-options.component.scss'],
})
export class TripOptionsComponent {
  @Input() formGroup!: FormGroup;
  @Output() passengersChange = new EventEmitter<{
    adults: number;
    children: number;
    infants: number;
  }>();

  numberOfAdults = 1;
  numberOfChildren = 0;
  numberOfInfants = 0;

  setAdults(adults: number) {
    this.numberOfAdults = adults;
    this.updatePassengers();
  }

  setChildren(children: number) {
    this.numberOfChildren = children;
    this.updatePassengers();
  }

  setInfants(infants: number) {
    this.numberOfInfants = infants;
    this.updatePassengers();
  }

  get passengerCount() {
    return this.numberOfAdults + this.numberOfChildren + this.numberOfInfants;
  }

  openPassengersDialog() {
    console.log('Open passengers dialog');
  }

  updatePassengers() {
    this.passengersChange.emit({
      adults: this.numberOfAdults,
      children: this.numberOfChildren,
      infants: this.numberOfInfants,
    });
  }
}
