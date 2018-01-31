//fichier qui contient l'ensemble des routes necessaire au composant admin

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ForminscritionComponent} from '../../vue_public/forminscrition/forminscrition.component';
import {AdminComponent } from '../../vue_admin/admin/admin.component';
import {FormAgentsComponent} from '../../vue_admin/form-agents/form-agents.component';
import {DemandeComponent} from '../../vue_admin/demande/demande.component';
import {GestionAgentsComponent} from '../gestion-agents/gestion-agents.component';
import {AffectationAgentComponent} from '../affectation-agent/affectation-agent.component';


const routes: Routes = [
{
    path: 'admin',
    component: AdminComponent,
    children: [

    	{path: '', component: GestionAgentsComponent, pathMatch: 'full'},

      {path: 'demandes', component: DemandeComponent, pathMatch: 'full'},
     {path: 'agents/:id', component: FormAgentsComponent, pathMatch: 'full'},
     {path: 'affectation', component: AffectationAgentComponent, pathMatch:'full'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
