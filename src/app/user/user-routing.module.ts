import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListuserComponent } from './listuser/listuser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AuthentificationComponent } from './authentification/authentification.component';

const routes: Routes = [
  {path:"listuser",component:ListuserComponent},
  {path:"adduser",component:AdduserComponent},
  {path:"auth",component:AuthentificationComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
