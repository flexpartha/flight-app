import { Route } from '@angular/router';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';

export const flightDetailRoutes: Route[] = [
  /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
  {
    path: 'details',children:[
      {
        path:':id',
        component: FlightDetailComponent
      }
    ]
  }
];
