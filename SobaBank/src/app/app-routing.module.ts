import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import {ConnexionComponent } from './vue_public/connexion/connexion.component';
import {ForminscritionComponent} from './vue_public/forminscrition/forminscrition.component';

//import des composant principal pour chaque vue
import {AccueilAgentComponent} from './vue_agent/accueil-agent/accueil-agent.component';
import {AdminComponent } from './vue_admin/admin/admin.component';
import {MainClientComponent} from './vue_client/main-client/main-client.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      
     //path pour acceder au different vue  http://localhost:4200/x ou x=admin ou client ou agent
     { path: 'agent', component: AccueilAgentComponent, pathMatch: 'full'},
     {path: 'admin', component: AdminComponent, pathMatch: 'full'},
     {path:'client', component: MainClientComponent, pathMatch:'full'},
     {path: 'inscription', component: ForminscritionComponent, pathMatch: 'full'},
     {path: 'connexion', component: ConnexionComponent, pathMatch: 'full'},

    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }