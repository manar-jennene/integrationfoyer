import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';
import { ListReservationsComponent } from './list-reservations/list-reservations.component';
import { ListReservationsEtudiantComponent } from './list-reservations-etudiant/list-reservations-etudiant.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ReservationService } from '../service/reservation.service';
import { ReservnavComponent } from '../front/reservnav/reservnav.component';


@NgModule({
  declarations: [
    ReservationFormComponent,
    ListReservationsComponent,
    ListReservationsEtudiantComponent,
    ReservationDetailsComponent,
    ReservnavComponent

  ],
  imports: [
    ReservationRoutingModule,
    TableModule,
    TagModule,
    ConfirmDialogModule,
    CommonModule,
    FormsModule,
    ProgressBarModule,
    DialogModule,
    ButtonModule,
    ToastModule,
    DropdownModule,
    TooltipModule,
    ProgressSpinnerModule,
    CardModule,
    PanelModule,
    ProgressBarModule

  ],
  providers:[
    DialogService,
    ReservationService,
    ConfirmationService,
    MessageService
  
    
    
  ]
})
export class ReservationModule { }