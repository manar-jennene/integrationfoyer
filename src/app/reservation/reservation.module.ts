import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ListReservationsComponent } from './list-reservations/list-reservations.component';
import { ListReservationsEtudiantComponent } from './list-reservations-etudiant/list-reservations-etudiant.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';


@NgModule({
  declarations: [
    ListReservationsComponent,
    ListReservationsEtudiantComponent,
    ReservationDetailsComponent,
    ReservationFormComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule
  ]
})
export class ReservationModule { }
