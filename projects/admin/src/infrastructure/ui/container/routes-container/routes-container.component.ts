import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RoutesCardComponent } from '../../components/routes-card/routes-card.component';
import { GetRouteUseCase } from '../../../../application/route/get-route.usecase';
import { DeleteRouteUseCase } from '../../../../application/route/delete-route.usecase';
import { UpdateRouteUseCase } from '../../../../application/route/update-route.usecase'; // Importa el caso de uso
import { IRoute } from '../../../../domain/model/route.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-routes-container',
  standalone: true,
  imports: [RoutesCardComponent, CommonModule],
  templateUrl: './routes-container.component.html',
})
export class RoutesContainerComponent implements OnInit {
  routes$: Observable<IRoute[]>;

  constructor(
    private getRouteUseCase: GetRouteUseCase,
    private deleteRouteUseCase: DeleteRouteUseCase,
    private updateRouteUseCase: UpdateRouteUseCase // Agrega el caso de uso
  ) {}

  ngOnInit(): void {
    this.getRouteUseCase.initSubscriptions(); // Inicializa las suscripciones de GetRouteUseCase
    this.getRouteUseCase.execute();
    this.routes$ = this.getRouteUseCase.allRoutes$();
  }

  ngOnDestroy(): void {
    this.getRouteUseCase.destroySubscriptions();
    this.deleteRouteUseCase.destroySubscriptions(); // Limpia las suscripciones de DeleteRouteUseCase
  }

  onEditRoute(route: IRoute): void {
    this.updateRouteUseCase.execute(route); // Ejecuta el caso de uso para actualizar la ruta
  }

  onDeleteRoute(route: IRoute): void {
    this.deleteRouteUseCase.execute(route.routeId); // Ejecuta el caso de uso para eliminar la ruta
  }
}
