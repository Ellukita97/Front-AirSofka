import { inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { StateFactory } from "shared";
import { IFlight } from "../model/flight.model";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FlightState {
  private readonly _factory = inject(StateFactory); 

  //#region Subjects
  private readonly flights$ = new BehaviorSubject<IFlight[]>([]);
  private readonly form$ = new BehaviorSubject<FormGroup>(null);
  //#endregion

  store() {
    return {
      listFlights: this._factory.state(this.flights$),
      form: this._factory.state(this.form$)
    }
  }
}