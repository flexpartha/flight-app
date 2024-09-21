import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flight, FlightDataService } from '@flight-app/flight-data';
import { Router } from '@angular/router';

@Component({
  selector: 'flight-app-flight-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
})
export class FlightSearchComponent {

    flightList$ = this.flightService.load();

    constructor(private flightService: FlightDataService, private router: Router) {
    }

    redirectTo(data:Flight){
      this.router.navigate(['flight/details/', data.id]);
    }
}
