import { Component, ViewEncapsulation } from '@angular/core';
import { ClassCardComponent } from "../class-card/class-card.component";
import { ClassCardData } from '../../../../domain/model/card.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-flight-info',
  imports: [ClassCardComponent, CommonModule],
  templateUrl: './flight-info.component.html',
  styleUrl: './flight-info.component.scss',
})
export class FlightInfoComponent {
  isEconomicActive = false;
  isExecutiveActive = false;

  toggleClass(classType: string) {
    if (classType === 'economic') {
      this.isEconomicActive = !this.isEconomicActive;
      this.isExecutiveActive = false; 
    } else if (classType === 'executive') {
      this.isExecutiveActive = !this.isExecutiveActive;
      this.isEconomicActive = false; 
    }
  }

  public economicClassCards: ClassCardData[] = [
    {
      type: 'Económica Basic',
      description: 'Tarifa más restrictiva. Viaje Ligero',
      price: '1.165.662 COP',
      conditions: [
        { icon: 'dolar.svg', text: 'Equipaje en bodega con cargo', alt: 'Dolar' },
        { icon: 'dolar.svg', text: 'Preselección de asientos con cargo', alt: 'Dolar' },
        { icon: 'check.svg', text: 'Ascenso PreferMembers (prioridad baja)', alt: 'Check' },
        { icon: 'check.svg', text: 'Acumula 50% de millas ConnectMiles', alt: 'Check' },
      ],
      others: [
        { icon: 'dolar.svg', text: 'Cambios permitidos con penalidad', alt: 'Dolar' },
        { icon: 'cancel.svg', text: 'Tarifa no reembolsable', alt: 'Cancel' },
      ],
      colorHeader: '#0e68ff'
    },
    {
      type: 'Económica Classic',
      description: 'Los beneficios que esperas',
      price: '1.416.310 COP',
      conditions: [
        { icon: 'check.svg', text: '1 equipaje en bodega (23kg)', alt: 'Check' },
        { icon: 'check.svg', text: 'Preselección de asientos regulares', alt: 'Check' },
        { icon: 'check.svg', text: 'Ascenso PreferMembers (prioridad media)', alt: 'Check' },
        { icon: 'check.svg', text: 'Acumula 100% de millas ConnectMiles', alt: 'Check' },
      ],
      others: [
        { icon: 'check.svg', text: '1 cambio sin penalidad', alt: 'Check' },
        { icon: 'cancel.svg', text: 'Tarifa no reembolsable', alt: 'Cancel' },
      ],
      colorHeader: '#0032a0'
    },
    {
      type: 'Económica Full',
      description: 'Mejor flexibilidad para tu viaje',
      price: '3.553.709 COP',
      conditions: [
        { icon: 'check.svg', text: '2 equipajes en bodega (23kg)', alt: 'Check' },
        { icon: 'check.svg', text: 'Preselección de asientos Premium', alt: 'Check' },
        { icon: 'check.svg', text: 'Ascenso PreferMembers (prioridad alta)', alt: 'Check' },
        { icon: 'check.svg', text: 'Acumula 125% de millas ConnectMiles', alt: 'Check' },
      ],
      others: [
        { icon: 'check.svg', text: 'Cambios limitados sin penalidad', alt: 'Check' },
        { icon: 'check.svg', text: 'Tarifa reembolsable', alt: 'Cancel' },
      ],
      colorHeader: '#001a66'

    }
  ];

  public executiveClassCards: ClassCardData[] = [
    {
      type: 'Ejecutuva Promo',
      description: 'Máxima comodidad a mejor precio',
      price: '2.637.685.662 COP',
      conditions: [
        { icon: 'check.svg', text: '1 equipajes en bodega (32 kg)', alt: 'Check' },
        { icon: 'check.svg', text: 'Preselección de todos los asientos', alt: 'Check' },
        { icon: 'check.svg', text: 'Acumula 175% de millas ConnectMiles', alt: 'Check' },
      ],
      others: [
        { icon: 'check.svg', text: '1 cambio sin penalidad', alt: 'Check' },
        { icon: 'cancel.svg', text: 'Tarifa no reembolsable', alt: 'Cancel' },
      ],
      colorHeader: '#866d4b'
    },
    {
      type: 'Ejecutiva Full',
      description: 'Máxima flexibilidad y Comodidad',
      price: '7.213.253 COP',
      conditions: [
        { icon: 'check.svg', text: '2 equipajes en bodega (32kg)', alt: 'Check' },
        { icon: 'check.svg', text: 'Preselección de todos los asientos', alt: 'Check' },
        { icon: 'check.svg', text: 'Acumula 300% de millas ConnectMiles', alt: 'Check' },
      ],
      others: [
        { icon: 'check.svg', text: 'Cambios limitados sin penalidad', alt: 'Check' },
        { icon: 'check.svg', text: 'Tarifa reembolsable', alt: 'Check' },
      ],
      colorHeader: '#121212'
    }
  ];
}
