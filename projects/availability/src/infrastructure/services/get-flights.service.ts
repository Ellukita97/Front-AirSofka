import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFlight, IRequiredFlight } from '../../domain/model/flight.model';

@Injectable({
  providedIn: 'root'
})
export class GetFlightsService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/flights';

  execute(requiredFlight: IRequiredFlight): Observable<IFlight[]> {
    return this.http.post<IFlight[]>(this.apiUrl, requiredFlight, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders()
      .append('Content-Type', 'application/json')
  }
}
