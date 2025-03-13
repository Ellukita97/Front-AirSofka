import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemoveFlightService {
 private http = inject(HttpClient);
 removeFlight(flightId: string){
  return this.http.delete<any>(`http://localhost:8080/api/flight`, {
    body: { aggregateId: flightId }
  });

 }

}
