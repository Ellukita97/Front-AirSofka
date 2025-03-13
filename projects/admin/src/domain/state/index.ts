import { inject, Injectable } from '@angular/core';
import { ReservationState } from './reservation.state';
import { RouteState } from './route.state';

@Injectable({
  providedIn: 'root',
})
export class StateIndex {
  private readonly _reservation = inject(ReservationState);
  private readonly _routes = inject(RouteState);

  get reservationStateIndex() {
    return this._reservation.store();
  }

  get routeStateIndex() {
    return this._routes.store();
  }
}
