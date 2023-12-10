import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocRoutingModule } from './bloc-routing.module';
import { BlocListComponent } from './bloc-list/bloc-list.component';
import { AddBlocComponent } from './add-bloc/add-bloc.component';
import { EditBlocComponent } from './edit-bloc/edit-bloc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlocService } from '../service/bloc.service';
import { NavBComponent } from '../nav-b/nav-b.component';

//import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    BlocListComponent,
    EditBlocComponent,
    AddBlocComponent,
    NavBComponent
  ],
  imports: [
    CommonModule,
    BlocRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   //Ng2SearchPipeModule
    
  ],
  providers: [BlocService]

})
export class BlocModule { }