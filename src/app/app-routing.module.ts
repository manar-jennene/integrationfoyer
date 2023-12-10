import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontofficeComponent } from './front/frontoffice/frontoffice.component';
import { FoyerfrontComponent } from './front/foyerfront/foyerfront.component';
//import { BackofficeComponent } from './back/backoffice/backoffice.component';

const routes: Routes = [
  {path:"front" , component:FrontofficeComponent},
  {path:"foyerfont" , component:FoyerfrontComponent},
  //{path:"back" , component:BackofficeComponent},
  { path: 'foyer', loadChildren: () => import('./foyer/foyer.module').then(m => m.FoyerModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  {path: "reservation", loadChildren: () =>import('./reservation/reservation.module').then((m) => m.ReservationModule),},
  { path: "", loadChildren: () => import('./universite/universite.module').then((m) => m.UniversiteModule) },
  {path: 'bloc', loadChildren: () => import('./bloc/bloc.module').then((m) => m.BlocModule) },
  { path: '', loadChildren: () => import('./chambre/chambre.module').then((m) => m.ChambreModule) },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
