import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainClientComponent} from '../../vue_client/main-client/main-client.component';
import {VirementComponent } from '../../vue_client/virement/virement.component';
import {CommandeComponent } from '../../vue_client/commande/commande.component';
import {MdpComponent } from '../../vue_client/mdp/mdp.component';
import {ComptesComponent } from '../../vue_client/comptes/comptes.component';
import {CourantComponent } from '../../vue_client/courant/courant.component';
import {ClientComponent } from '../../vue_client/client/client.component';
import {EpargneComponent } from '../../vue_client/epargne/epargne.component';
import { AgentComponent } from '../../vue_client/agent/agent.component';
import { ClientAccueilComponent } from '../../vue_client/client-accueil/client-accueil.component';
import { ClientNotificationsComponent } from '../../vue_client/client-notifications/client-notifications.component';


const routes: Routes = [
{
    path: 'client',
    component: MainClientComponent,
    children: [
 {path: 'virement', component: VirementComponent, pathMatch: 'full'},
     {path: 'commande', component: CommandeComponent, pathMatch: 'full'},
      {path: 'mdp', component: MdpComponent, pathMatch: 'full'},
       {path: 'comptes', component: ComptesComponent, pathMatch: 'full'},
       {path: 'courant', component: CourantComponent, pathMatch: 'full'},
        {path: 'client', component: ClientComponent, pathMatch: 'full'},
        {path: 'epargne', component: EpargneComponent, pathMatch: 'full'},
         {path: 'agent', component: AgentComponent, pathMatch: 'full'},
     {path: 'client-accueil', component: ClientAccueilComponent, pathMatch: 'full'},
             {path: 'client-notifications', component: ClientNotificationsComponent, pathMatch: 'full'}

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainClientRoutingModule { }