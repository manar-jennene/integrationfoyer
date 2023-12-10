import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoyerRoutingModule } from './foyer-routing.module';
import { ListfoyerComponent } from './listfoyer/listfoyer.component';
import { AddfoyerComponent } from './addfoyer/addfoyer.component';
import { FormsModule } from '@angular/forms';
import { BackofficeComponent } from '../back/backoffice/backoffice.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';


@NgModule({
  declarations: [
    ListfoyerComponent,
    AddfoyerComponent,
    BackofficeComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FoyerRoutingModule,
    FormsModule
  ]
})
export class FoyerModule { }
