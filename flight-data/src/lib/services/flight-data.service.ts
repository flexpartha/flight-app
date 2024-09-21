import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../model/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  load(): Observable<Flight[]> {

    return of([
        { id: 1, from: 'Frankfurt', to: 'Mallorca', date: new Date().toISOString() },
        { id: 2, from: 'Delhi', to: 'Barcelona', date: new Date().toISOString() },
        { id: 3, from: 'Mumbai', to: 'Ibiza', date: new Date().toISOString() },
    ]);
}

getRespectiveFlightDeatails(id:number){
   return this.load().subscribe((flightDetais:Flight[])=>{
    flightDetais.filter(flightid => flightid.id === id);
   })
}
}
