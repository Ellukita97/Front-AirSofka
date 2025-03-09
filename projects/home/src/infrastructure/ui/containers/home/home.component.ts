import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { NewDestinyComponent } from '../../components/new-destiny/new-destiny.component';
import { BestFlightsComponent } from '../../components/best-flights/best-flights.component';

@Component({
  selector: 'lib-home',
  imports: [HeroComponent, NewDestinyComponent, BestFlightsComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
