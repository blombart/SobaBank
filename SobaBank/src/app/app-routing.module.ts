import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import {ForminscritionComponent} from './vue_public/forminscrition/forminscrition.component'
import {ConnexionComponent } from './vue_public/connexion/connexion.component'
import {VirementComponent } from './vue_client/virement/virement.component'
import {CommandeComponent } from './vue_client/commande/commande.component'

@NgModule({
  imports: [
    RouterModule.forRoot([
      
     /*{path: '', component: AppComponent, pathMatch: 'full'},*/
     {path: 'inscription', component: ForminscritionComponent, pathMatch: 'full'},
     {path: 'connexion', component: ConnexionComponent, pathMatch: 'full'},
     {path: 'virement', component: VirementComponent, pathMatch: 'full'},
     {path: 'commande', component: CommandeComponent, pathMatch: 'full'}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

