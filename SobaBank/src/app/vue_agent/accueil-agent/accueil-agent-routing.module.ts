import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilAgentComponent} from '../../vue_agent/accueil-agent/accueil-agent.component';
import {ListeDemandesComponent} from '../../vue_agent/liste-demandes/liste-demandes.component';
import {ListeClientComponent } from '../../vue_agent/liste-client/liste-client.component';
import {DetailsDemandesComponent} from '../../vue_agent/details-demandes/details-demandes.component';


import { NewCompteComponent } from '../../vue_agent/liste-demandes/new-compte/new-compte.component';
import { ChequierComponent } from '../../vue_agent/liste-demandes/chequier/chequier.component';
import { DemandeClientComponent} from '../../vue_agent/liste-demandes/demande-client/demande-client.component';


const routes: Routes = [
{
    path: 'agent',
    component: AccueilAgentComponent,
    children: [
 /*        {path: 'agent', component: AccueilAgentComponent, pathMatch: 'full'},*/


     {
       path: 'listeDemandes', 
       component: ListeDemandesComponent,
       children: [
                {path: 'newCompte', component: NewCompteComponent, pathMatch: 'full'},
                {path: 'chequier', component: ChequierComponent, pathMatch: 'full'},
                {path: 'demandeClient', component: DemandeClientComponent, pathMatch: 'full'}
     ]},

     {path: 'listeClient', component: ListeClientComponent, pathMatch: 'full'},
     { path: 'detail/:id', component: DetailsDemandesComponent }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccueilAgentRoutingModule { }
