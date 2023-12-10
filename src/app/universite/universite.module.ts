import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { UniversiteListComponent } from './universite-list/universite-list.component';
import { AddUniversiteComponent } from './add-universite/add-universite.component';
import { EditUniversiteComponent } from './edit-universite/edit-universite.component';
//import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UniversiteService } from '../service/universite.service';
import { NavbarUnComponent } from '../navbar-un/navbar-un.component';


@NgModule({
  declarations: [
    UniversiteListComponent,
    AddUniversiteComponent,
    EditUniversiteComponent,
    NavbarUnComponent
  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    
    //Ng2SearchPipeModule
  ],
  providers:[UniversiteService]
})
export class UniversiteModule { }