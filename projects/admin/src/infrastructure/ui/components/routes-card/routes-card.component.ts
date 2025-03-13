import { Component, Input } from '@angular/core';
import { IRoute } from '../../../../domain/model/route.model';

@Component({
  selector: 'lib-routes-card',
  templateUrl: './routes-card.component.html',
  styleUrls: ['./routes-card.component.scss'],
})
export class RoutesCardComponent {
  @Input() routes: IRoute[] = []; // Asegúrate de que la propiedad esté correctamente definida
}
