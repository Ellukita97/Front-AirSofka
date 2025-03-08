import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { NewDestinyComponent } from '../../components/new-destiny/new-destiny.component';

@Component({
  selector: 'lib-home',
  imports: [HeroComponent, NewDestinyComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
