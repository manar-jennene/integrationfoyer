import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoyerRoutingModule } from './foyer-routing.module';
import { ListfoyerComponent } from './listfoyer/listfoyer.component';
import { AddfoyerComponent } from './addfoyer/addfoyer.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { UpdatefoyerComponent } from './updatefoyer/updatefoyer.component';


@NgModule({
  declarations: [
    ListfoyerComponent,
    AddfoyerComponent,
    
    NavbarComponent,
    SidebarComponent,
    UpdatefoyerComponent
  ],
  imports: [
    CommonModule,
    FoyerRoutingModule,
    FormsModule
  ]
})
export class FoyerModule { }
