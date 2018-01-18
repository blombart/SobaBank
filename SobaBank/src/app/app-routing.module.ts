import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import {ForminscritionComponent} from './vue_public/forminscrition/forminscrition.component'
import {ConnexionComponent } from './vue_public/connexion/connexion.component'
import {AccueilAgentComponent} from './vue_agent/accueil-agent/accueil-agent.component'
import {ListeDemandesComponent} from './vue_agent/liste-demandes/liste-demandes.component'
import {RechercheComponent } from './vue_agent/recherche/recherche.component';
import {ListeClientComponent } from './vue_agent/liste-client/liste-client.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
     
     {path: '', redirectTo: '/agent', pathMatch: 'full'},
     /*{path: '', component: AppComponent, pathMatch: 'full'},*/
     {path: 'inscription', component: ForminscritionComponent, pathMatch: 'full'},
     {path: 'connexion', component: ConnexionComponent, pathMatch: 'full'},
     {path: 'agent', component: AccueilAgentComponent, pathMatch: 'full'},
     {path: 'listeDemandes', component: ListeDemandesComponent, pathMatch: 'full'},
     {path: 'recherche', component: RechercheComponent, pathMatch: 'full'},
     {path: 'listeClient', component: ListeClientComponent, pathMatch: 'full'}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

