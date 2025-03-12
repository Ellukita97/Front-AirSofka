import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { IFlight } from '../../../../domain/model/flight.model';
import { ButtonTableComponent } from 'shared';



@Component({
  selector: 'lib-table-flight',
  imports: [CurrencyPipe,DatePipe,ButtonTableComponent],
  templateUrl: './table-flight.component.html',
  styleUrl: './table-flight.component.css'
})
export class TableFlightComponent {

  public dataFlight= input.required<IFlight[]>() ;
  public deleteClient =  output<string>();
  // public createClient = output<IRequiredFlight>();
  ngOnInit(): void {
    console.log("asdasdasd");
    
    
  }

  get columnKeys(): string[] {
    
    return this.dataFlight().length > 0 ? Object.keys(this.dataFlight()[0]) : [];
   
  }
  images = [
    'public/admin/form-svgrepo-com.svg#icon-delete',  
    'public/admin/form-svgrepo-com.svg#icon-edit'
    ];
  


}
