import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-hero',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  flightForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.flightForm = this.fb.group({
      tripType: ['roundTrip', Validators.required],
      passengers: [1, Validators.required],
      useMiles: [false],
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      dates: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.flightForm.valid) {
      console.log('Search flights with:', this.flightForm.value);
    }
  }

  toggleTripType(type: string) {
    this.flightForm.get('tripType')?.setValue(type);
  }

  toggleUseMiles(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.flightForm.get('useMiles')?.setValue(checkbox.checked);
  }
}
