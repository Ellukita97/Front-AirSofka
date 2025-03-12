import { inject, Injectable } from "@angular/core";
import { ReservationState } from "./reservation.state";
import { FlightState } from "./flight.state";

@Injectable({
  providedIn: 'root'
})
export class StateIndex {
  private readonly _reservation = inject(ReservationState);
  private readonly _flight = inject(FlightState);

  get reservationStateIndex() {
    return this._reservation.store();
  }
  get flights() {
    return this._flight.store();
  }
}