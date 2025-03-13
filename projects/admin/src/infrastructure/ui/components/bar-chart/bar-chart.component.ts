import { Component, Input, OnInit } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { BarChartSeries } from '../../../../domain/model/bar-series-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-bar-chart',
  imports: [CanvasJSAngularChartsModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent implements OnInit {

 // @Input() barData: Observable<BarChartSeries>;

  confirmed: number = 0;
  canceled: number = 0;
  pending: number = 0;
  ngOnInit(): void {
/*     this.barData.subscribe(values => {
      this.confirmed = values.confirmed;
      this.canceled = values.canceled;
      this.pending = values.pending;
    }) */
  }
  chartOptions = {
    theme: "light2",
	  data: [{
		type: "column",
		dataPoints: [
		{ label: "Emitido",  y: 5 },
		{ label: "Cancelado", y: 10  },
		{ label: "Pendiente", y: 20 },
		]}]
    };

}
