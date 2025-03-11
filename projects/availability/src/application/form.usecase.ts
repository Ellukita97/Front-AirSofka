import { inject, Injectable } from "@angular/core";
import { Observable, Subscription, tap } from "rxjs";
import { State } from "../domain/state";
import { FormGroup } from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class FormUseCase {
  private readonly _state = inject(State);
  private subscriptions: Subscription;

  //#region Observables
  form$(): Observable<FormGroup> {
    return this._state.flights.form.$() as Observable<FormGroup>;
  }
  //#endregion

  //#region Public Methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  execute(form: FormGroup): void {
    this.subscriptions.add(
      this._state.flights.form.set(form)
    );
  }

  viewForm(): void {
    this.subscriptions.add(
      this.form$().subscribe(form => {
        console.log("Formulario recibidooo:", form);
      })
    );
  }
  //#endregion
}