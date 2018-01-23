import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ForminscritionComponent} from '../../vue_public/forminscrition/forminscrition.component';
import {AdminComponent } from '../../vue_admin/admin/admin.component';
import {FormAgentsComponent} from '../../vue_admin/form-agents/form-agents.component';
import {DemandeComponent} from '../../vue_admin/demande/demande.component'
import {RechercheComponent} from '../../vue_admin/recherche/recherche.component'
const routes: Routes = [
{
    path: '',
    component: AdminComponent,
    children: [
    	{path: '', component: RechercheComponent, pathMatch: 'full'},
      {path: 'demandes', component: DemandeComponent, pathMatch: 'full'},
     {path: 'agents/:id', component: FormAgentsComponent, pathMatch: 'full'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
