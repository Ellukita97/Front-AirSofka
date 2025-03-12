import { Component, OnInit } from '@angular/core';
import { RoutesCardComponent } from '../../components/routes-card/routes-card.component';

@Component({
  selector: 'lib-routes-container',
  imports: [RoutesCardComponent],
  templateUrl: './routes-container.component.html',
})
export class RoutesContainerComponent implements OnInit {
  ngOnInit(): void {
    console.log('RoutesContainerComponent initialized');
  }
}
