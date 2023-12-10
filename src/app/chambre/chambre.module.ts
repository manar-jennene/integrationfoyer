import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { ChambreRoutingModule } from './chambre-routing.module';
import { AddChambreComponent } from './add-chambre/add-chambre.component';
import { ChambresComponent } from './chambres/chambres.component';
import { UpdateChambreComponent } from './update-chambre/update-chambre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavchamComponent } from '../navcham/navcham.component';
//import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AddChambreComponent,
    ChambresComponent,
    UpdateChambreComponent,
    NavchamComponent
  ],
  imports: [
    CommonModule,
    RouterModule, // Add this line
    ChambreRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    //Ng2SearchPipeModule
    
    


  ]
})
export class ChambreModule { }
