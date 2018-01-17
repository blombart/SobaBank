import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import {ForminscritionComponent} from './vue_public/forminscrition/forminscrition.component'
import {ConnexionComponent } from './vue_public/connexion/connexion.component'
import {AccueilAgentComponent} from './vue_agent/accueil-agent/accueil-agent.component'

@NgModule({
  imports: [
    RouterModule.forRoot([
     
     {path: '', redirectTo: '/agent', pathMatch: 'full'},
     /*{path: '', component: AppComponent, pathMatch: 'full'},*/
     {path: 'inscription', component: ForminscritionComponent, pathMatch: 'full'},
     {path: 'connexion', component: ConnexionComponent, pathMatch: 'full'},
     {path: 'agent', component: AccueilAgentComponent, pathMatch: 'full'}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

