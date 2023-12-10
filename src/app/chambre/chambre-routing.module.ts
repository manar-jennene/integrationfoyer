import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChambresComponent } from './chambres/chambres.component';
import { AddChambreComponent } from './add-chambre/add-chambre.component';
import { UpdateChambreComponent } from './update-chambre/update-chambre.component';

const routes: Routes = [
  {path: 'listchambre', component: ChambresComponent},
{path:'addchambre',component:AddChambreComponent},
  { path: 'updatechambre/:idChambre', component: UpdateChambreComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChambreRoutingModule { }
