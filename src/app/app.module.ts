import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontofficeComponent } from './front/frontoffice/frontoffice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReservationModule } from './reservation/reservation.module';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { FoyerfrontComponent } from './front/foyerfront/foyerfront.component';
import { ChambreModule } from './chambre/chambre.module';
import { BlocfrontComponent } from './front/blocfront/blocfront.component';
import { ChambrefrontComponent } from './front/chambrefront/chambrefront.component';
import { UnifrontComponent } from './front/unifront/unifront.component';
@NgModule({
  declarations: [
    AppComponent,
    FrontofficeComponent,
    FoyerfrontComponent,
    BlocfrontComponent,
    ChambrefrontComponent,
    UnifrontComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    BrowserAnimationsModule,
    ReservationModule,
    CommonModule,
    ChambreModule,
    
    


  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
