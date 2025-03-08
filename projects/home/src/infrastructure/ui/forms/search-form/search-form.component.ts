import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'lib-search-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent {
  flightForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.flightForm = this.fb.group({
      tripType: ['roundTrip', Validators.required],
      //Ir cambiando el valor segun se selecciona la cantidad de pasajeros
      passengers: [1, Validators.required],
      useMiles: [false],
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      dates: ['', Validators.required],
    });
  }
}
