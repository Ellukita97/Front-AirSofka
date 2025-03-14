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
import { IFlight, IFlightUpdate } from '../../../../domain/model/flight.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-update-flight',
  imports: [BaseFormComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './update-flight.component.html',
  styleUrl: './update-flight.component.scss',
})
export class UpdateFlightComponent implements OnChanges {
  @Input() flightFound: IFlight;
  @Output() updateFlight = new EventEmitter<IFlightUpdate>();

  private formBuilder = inject(FormBuilder);
  public formGroup = this.formBuilder.group({
    aggregateId: [{ value: '', disabled: true }, Validators.required],
    flightNumber: ['', Validators.required],
    routeId: ['', Validators.required],
    flightModel: ['', Validators.required],
    price: [0, Validators.required],
    departureTime: ['', Validators.required],
    arrivalTime: ['', Validators.required],
  });

  ngOnChanges(changes: SimpleChanges) {
    if (changes['flightFound'] && this.flightFound) {
      this.patchFormValues();
      console.log(this.formGroup.value);
      
    }
  }

  private patchFormValues() {
    if (!this.flightFound) return;

    this.formGroup.patchValue({
      aggregateId: this.flightFound.flightId,
      flightNumber: this.flightFound.flightNumber,
      routeId: this.flightFound.routeId,
      flightModel: this.flightFound.flightModel,
      price: this.flightFound.economyBasicPrice,
      departureTime: this.flightFound.departureTime,
      arrivalTime: this.flightFound.arrivalTime,
    }, { emitEvent: false });

    // Marca el formulario como "pristine" sin reiniciarlo
    this.formGroup.markAsPristine();  
  }

  submit() {
    if (this.formGroup.valid) {
      console.log('✅ Formulario enviado:', this.formGroup.value as unknown as IFlightUpdate);
      this.updateFlight.emit(this.formGroup.getRawValue() as IFlightUpdate);
      this.formGroup.markAsPristine();
    } else {
      console.log('❌ Formulario inválido:', this.formGroup.getRawValue());
    }
  }
}