import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Flight, FlightDataService } from '@flight-app/flight-data';
import { Observable, map, switchMap } from 'rxjs';

@Component({
  selector: 'flight-app-flight-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css'],
})
export class FlightDetailComponent implements OnInit {
  id = '';
  flightDetails: Flight[] = [];

  //async pipe implementation
  flightList$ = this.services.load();
  flightDetails$!: Observable<Flight[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private services: FlightDataService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    // without asyncpipe implementation

    // this.services.load().subscribe((item:Flight[])=>{
    //    this.flightDetails = item.filter(id => id.id === parseInt(this.id))
    //    console.log(this.flightDetails);
    // });

    ////async pipe implementation
    this.flightDetails$ = this.flightList$.pipe(
      map((items) => items.filter((id) => id.id === parseInt(this.id)))
    );

    // this.flightDetails$ = this.activatedRoute.paramMap.pipe(
    //   switchMap((parms: ParamMap) =>
    //     this.flightList$.pipe(
    //       map((items) =>
    //         items.filter((id: any) => (id.id = parms.get(this.id)))
    //       )
    //     )
    //   )
    // );
  }
}
