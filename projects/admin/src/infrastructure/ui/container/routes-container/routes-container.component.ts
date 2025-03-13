import { Component, OnInit } from '@angular/core';
import { RoutesCardComponent } from '../../components/routes-card/routes-card.component';
import { GetRouteUseCase } from '../../../../application/route/get-route.usecase';
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

  constructor(private getRouteUseCase: GetRouteUseCase) {}

  ngOnInit(): void {
    this.getRouteUseCase.initSubscriptions();
    this.getRouteUseCase.execute();
    this.routes$ = this.getRouteUseCase.allRoutes$();
    console.log('RoutesContainerComponent initialized');
  }

  ngOnDestroy(): void {
    this.getRouteUseCase.destroySubscriptions();
  }
}
