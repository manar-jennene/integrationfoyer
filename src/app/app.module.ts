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
@NgModule({
  declarations: [
    AppComponent,
    FrontofficeComponent,
   
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
    CommonModule
    


  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
