import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IFlight, IRequiredFlight } from '../../domain/model/flight.model';
import { environment } from 'shared';

@Injectable({
  providedIn: 'root'
})
export class GetFlightsService {
  // private http = inject(HttpClient);
  // private apiUrl = environment.apiUrl + '/search-flight';

  // execute(requiredFlight: IRequiredFlight): Observable<IFlight[]> {
  //   return this.http.post<IFlight[]>(this.apiUrl, requiredFlight, { headers: this.getHeaders() });
  // }

  // private getHeaders() {
  //   return new HttpHeaders()
  //     .append('Content-Type', 'application/json')
  // }

  execute(requiredFlight: IRequiredFlight) {
    const mockFlights: IFlight[] = [
      {
        flightId: 'FL001',
        flightNumber: 'AV2024',
        aircraftModel: 'Boeing 737',
        duration: new Date('2025-04-15T02:30:00Z'),
        operatingAirline: 'Avianca',
        origin: requiredFlight.origin,
        destination: requiredFlight.destination,
        departureTime: new Date('2025-04-15T10:00:00Z'),
        arrivalTime: new Date('2025-04-15T12:30:00Z'),
        tax: {
          standardTax: 50,
          economicTax: 40,
          favorableTax: 30,
          executiveTax: 60,
          executiveFullTax: 80,
        },
        prices: {
          standardPrice: 300,
          economicPrice: 250,
          favorablePrice: 200,
          executivePrice: 400,
          executiveFullPrice: 500,
        },
        totalPricesInfo: {
          standardPriceTotal: 350,
          economicPriceTotal: 290,
          favorablePriceTotal: 230,
          executiveTotalPrice: 460,
          executiveFullPriceTotal: 580,
        }
      },
      {
        flightId: 'FL002',
        flightNumber: 'LA789',
        aircraftModel: 'Airbus A320',
        duration: new Date('2025-04-16T03:15:00Z'),
        operatingAirline: 'LATAM',
        origin: requiredFlight.origin,
        destination: requiredFlight.destination,
        departureTime: new Date('2025-04-16T14:45:00Z'),
        arrivalTime: new Date('2025-04-16T18:00:00Z'),
        tax: {
          standardTax: 55,
          economicTax: 42,
          favorableTax: 33,
          executiveTax: 65,
          executiveFullTax: 85,
        },
        prices: {
          standardPrice: 320,
          economicPrice: 270,
          favorablePrice: 220,
          executivePrice: 420,
          executiveFullPrice: 520,
        },
        totalPricesInfo: {
          standardPriceTotal: 375,
          economicPriceTotal: 310,
          favorablePriceTotal: 255,
          executiveTotalPrice: 480,
          executiveFullPriceTotal: 600,
        }
      },
      {
        flightId: 'FL003',
        flightNumber: 'IB101',
        aircraftModel: 'Boeing 777',
        duration: new Date('2025-04-18T07:00:00Z'),
        operatingAirline: 'Iberia',
        origin: requiredFlight.origin,
        destination: requiredFlight.destination,
        departureTime: new Date('2025-04-18T08:30:00Z'),
        arrivalTime: new Date('2025-04-18T15:30:00Z'),
        tax: {
          standardTax: 60,
          economicTax: 50,
          favorableTax: 40,
          executiveTax: 70,
          executiveFullTax: 90,
        },
        prices: {
          standardPrice: 350,
          economicPrice: 300,
          favorablePrice: 250,
          executivePrice: 450,
          executiveFullPrice: 550,
        },
        totalPricesInfo: {
          standardPriceTotal: 410,
          economicPriceTotal: 350,
          favorablePriceTotal: 290,
          executiveTotalPrice: 520,
          executiveFullPriceTotal: 640,
        }
      },
      {
        flightId: 'FL004',
        flightNumber: 'UA456',
        aircraftModel: 'Boeing 787 Dreamliner',
        duration: new Date('2025-04-20T05:45:00Z'),
        operatingAirline: 'United Airlines',
        origin: requiredFlight.origin,
        destination: requiredFlight.destination,
        departureTime: new Date('2025-04-20T09:15:00Z'),
        arrivalTime: new Date('2025-04-20T15:00:00Z'),
        tax: {
          standardTax: 65,
          economicTax: 55,
          favorableTax: 45,
          executiveTax: 75,
          executiveFullTax: 95,
        },
        prices: {
          standardPrice: 400,
          economicPrice: 350,
          favorablePrice: 300,
          executivePrice: 500,
          executiveFullPrice: 600,
        },
        totalPricesInfo: {
          standardPriceTotal: 470,
          economicPriceTotal: 410,
          favorablePriceTotal: 350,
          executiveTotalPrice: 570,
          executiveFullPriceTotal: 700,
        }
      }
    ];
    return of(mockFlights);
  }
}