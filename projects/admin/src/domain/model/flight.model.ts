export interface IFlight {
    flightId: string;
    flightNumber: string;
    flightModel: string;
    routeId: string;
    departureTime: string; 
    arrivalTime: string;
    status: string;
    seats: number;
    tax: number;
  
    businessFullPrice: number;
    taxBusinessFullPrice: number;
    totalPriceBusinessFullPrice: number;
  
    businessBasicPrice: number;
    taxBusinessBasicPrice: number;
    totalPriceBusinessBasicPrice: number;
  
    economyFullPrice: number;
    taxEconomyFullPrice: number;
    totalPriceEconomyFullPrice: number;
  
    economyBasicPrice: number;
    taxEconomyBasicPrice: number;
    totalPriceEconomyBasicPrice: number;
  
    economyClassicPrice: number;
    taxEconomyClassicPrice: number;
    totalPriceEconomyClassicPrice: number;
  }

  export interface IFlightRequest {
    flightNumber: string;
    flightModel: string;
    routeId: string;
    price: number;
    departureTime: string;
    arrivalTime: string;
  }

 export function mapFlightToRequest(flight: IFlight): IFlightRequest {
    return {
      flightNumber: flight.flightNumber,
      flightModel: flight.flightModel,
      routeId: flight.routeId,
      price: flight.totalPriceEconomyBasicPrice, // Puedes cambiar esto según la lógica de precios
      departureTime: flight.departureTime,
      arrivalTime: flight.arrivalTime,
    };
  }