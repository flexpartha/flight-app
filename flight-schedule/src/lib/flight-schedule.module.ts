import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { flightScheduleRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(flightScheduleRoutes),
    RouterModule,
  ],
})
export class FlightScheduleModule {}
