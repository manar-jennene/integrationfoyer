import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListuserComponent } from './listuser/listuser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthentificationComponent } from './authentification/authentification.component';
import { BackofficeComponent } from '../back/backoffice/backoffice.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider'; // Importe le DividerModule depuis PrimeNG


@NgModule({
  declarations: [
    ListuserComponent,
    AdduserComponent,
    AuthentificationComponent,
    BackofficeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
    ProgressBarModule,
    DividerModule,
    InputTextModule,
    DialogModule,
  ]
})
export class UserModule { }
