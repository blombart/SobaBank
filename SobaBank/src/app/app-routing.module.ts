import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {ForminscritionComponent} from './vue_public/forminscrition/forminscrition.component';
import {ConnexionComponent } from './vue_public/connexion/connexion.component';
import {AdminComponent } from './vue_admin/admin/admin.component';
import {FormAgentsComponent} from './vue_admin/form-agents/form-agents.component';
import {DemandeComponent} from './vue_admin/demande/demande.component'


@NgModule({
  imports: [
    RouterModule.forRoot([
      
     {path: '', redirectTo: '/admin', pathMatch: 'full'},
     {path: 'inscription', component: ForminscritionComponent, pathMatch: 'full'},
     {path: 'connexion', component: ConnexionComponent, pathMatch: 'full'},
     {path: 'admin', component: AdminComponent, pathMatch: 'full'},
     {path: 'demandes', component: DemandeComponent, pathMatch: 'full'},
     {path: 'creationAgents', component: FormAgentsComponent, pathMatch: 'full'}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }