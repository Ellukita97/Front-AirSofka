export interface IFlight {
  flightNumber: string;
  aircraftModel: string;
  duration: Date;
  airline: string;
  origin: string;
  destination: string;
  departureTime: Date;
  arrivalTime: Date;
  economicBasic: number;
  economicClassic: number;
  economicFull: number;
  executivePromo: number;
  executiveFull: number;
}

export interface IRequiredFlight {
  adults: number;
  children: number;
  infants: number;
  origin: string;
  destination: string;
  departureDate: Date;
  returnDate: Date;
}