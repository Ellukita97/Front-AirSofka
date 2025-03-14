import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'shared';
import { IRoute } from '../../../domain/model/route.model';

@Injectable({
  providedIn: 'root',
})
export class UpdateRouteService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl + '/update-route';

  update(route: IRoute): Observable<IRoute> {
    const headers = this.getHeaders();
    return this.http.put<IRoute>(this.apiUrl, route, { headers });
  }

  private getHeaders() {
    return new HttpHeaders().append('Content-Type', 'application/json');
  }
}
