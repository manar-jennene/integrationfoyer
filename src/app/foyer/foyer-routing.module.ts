import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListfoyerComponent } from './listfoyer/listfoyer.component';
import { AddfoyerComponent } from './addfoyer/addfoyer.component';
import { FrontofficeComponent } from '../front/frontoffice/frontoffice.component';

const routes: Routes = [
  {path:"listfoyer",component:ListfoyerComponent},
  {path:"addfoyer",component:AddfoyerComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoyerRoutingModule { }
