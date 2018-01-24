import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import {ConnexionComponent } from './vue_public/connexion/connexion.component';
import {ForminscritionComponent} from './vue_public/forminscrition/forminscrition.component';
import {AccueilAgentComponent} from './vue_agent/accueil-agent/accueil-agent.component';
import {AdminComponent } from './vue_admin/admin/admin.component';
@NgModule({
  imports: [
    RouterModule.forRoot([
      
     { path: 'agent', component: AccueilAgentComponent, pathMatch: 'full'},
     {path: 'admin', component: AdminComponent, pathMatch: 'full'},
     {path: 'inscription', component: ForminscritionComponent, pathMatch: 'full'},
     {path: 'connexion', component: ConnexionComponent, pathMatch: 'full'},

    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }