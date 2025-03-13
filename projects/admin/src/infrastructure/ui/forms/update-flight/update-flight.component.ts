import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseFormComponent } from 'shared';
import {
  IFlight,
  IFlightUpdate,
} from '../../../../domain/model/flight.model';

@Component({
  selector: 'lib-update-flight',
  imports: [BaseFormComponent, ReactiveFormsModule],
  templateUrl: './update-flight.component.html',
  styleUrl: './update-flight.component.scss',
})
export class UpdateFlightComponent implements OnChanges {
  @Input() flightFound: IFlight | null = null;
  @Output() updateFlight = new EventEmitter<IFlightUpdate>();
  flightRequest: any | null = null;

  customLabels: Record<string, string> = {
    aggregateId: 'ID Vuelo',
    flightNumber: 'Número de Vuelo',
    flightModel: 'Modelo de Avión',
    routeId: 'Ruta',
    price: 'Precio',
  };

  private formBuilder = inject(FormBuilder);
  public formGroup = this.formBuilder.group({
    aggregateId: [{ value: 0, disabled: true }, Validators.required],
    flightNumber: ['', Validators.required],
    routeId: ['', Validators.required],
    flightModel: ['', Validators.required],
    price: [0, Validators.required],
    departureTime: ['', Validators.required],
    arrivalTime: ['', Validators.required],
  });

  ngOnChanges(changes: SimpleChanges) {
    if (changes['flightFound'] && this.flightFound) {
      this.flightRequest = {
        aggregateId: this.flightFound.flightId,
        flightNumber: this.flightFound.flightNumber,
        routeId: this.flightFound.routeId,
        flightModel: this.flightFound.flightModel,
        price: this.flightFound.economyBasicPrice,
      };
      this.formGroup.patchValue({
        ...this.flightRequest,
        departureTime: this.flightFound.departureTime,
        arrivalTime: this.flightFound.arrivalTime,
      });
    }
  }

  submit() {
    if (this.formGroup.valid) {
      const flightupdate : IFlightUpdate={
        aggregateId: this.flightFound.flightId,
        flightNumber: this.formGroup.value.flightNumber,
        routeId: this.formGroup.value.routeId,
        flightModel: this.formGroup.value.flightModel,
        price: this.formGroup.value.price,
        departureTime: this.formGroup.value.departureTime,
        arrivalTime: this.formGroup.value.arrivalTime,
      };
      console.log('✅ Formulario enviado:', flightupdate);
      this.updateFlight.emit(flightupdate);
      this.formGroup.reset();
    } else {
      console.log('❌ Formulario inválido:', this.formGroup.value);
    }
  }
}
