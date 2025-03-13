import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { BarChartComponent } from "../bar-chart/bar-chart.component";
import { BarChartSeries } from '../../../../domain/model/bar-series-model';

@Component({
  selector: 'lib-canvas-card',
  imports: [CommonModule, BarChartComponent],
  templateUrl: './canvas-card.component.html',
  styleUrl: './canvas-card.component.scss'
})
export class CanvasCardComponent {
  chartHeader= input<string>();
 // chartBarData = input<BarChartSeries>();

}
