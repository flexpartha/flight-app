import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: NxWelcomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'flightList',
        loadComponent: () =>
            import('@flight-app/feature-search').then(c=>c.FlightSearchComponent)
    },
    {
        path:'flight',
        loadChildren: () =>
            import('@flight-app/flight-detail').then(m => m.FlightDetailModule)
    }
];
