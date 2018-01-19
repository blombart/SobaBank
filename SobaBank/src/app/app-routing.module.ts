import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import {ForminscritionComponent} from './vue_public/forminscrition/forminscrition.component'
import {ConnexionComponent } from './vue_public/connexion/connexion.component'
import {VirementComponent } from './vue_client/virement/virement.component'
import {CommandeComponent } from './vue_client/commande/commande.component'
import {MdpComponent } from './vue_client/mdp/mdp.component'
import {ComptesComponent } from './vue_client/comptes/comptes.component'
import {CourantComponent } from './vue_client/courant/courant.component'
import {ClientComponent } from './vue_client/client/client.component'
import {EpargneComponent } from './vue_client/epargne/epargne.component'
import { AgentComponent } from './vue_client/agent/agent.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      
     /*{path: '', component: AppComponent, pathMatch: 'full'},*/
     {path: 'inscription', component: ForminscritionComponent, pathMatch: 'full'},
     {path: 'connexion', component: ConnexionComponent, pathMatch: 'full'},
     {path: 'virement', component: VirementComponent, pathMatch: 'full'},
     {path: 'commande', component: CommandeComponent, pathMatch: 'full'},
      {path: 'mdp', component: MdpComponent, pathMatch: 'full'},
       {path: 'comptes', component: ComptesComponent, pathMatch: 'full'},
       {path: 'courant', component: CourantComponent, pathMatch: 'full'},
        {path: 'client', component: ClientComponent, pathMatch: 'full'},
        {path: 'epargne', component: EpargneComponent, pathMatch: 'full'},
         {path: 'agent', component: AgentComponent, pathMatch: 'full'}
       
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

