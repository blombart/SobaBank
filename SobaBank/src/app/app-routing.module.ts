import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import {ForminscritionComponent} from './vue_public/forminscrition/forminscrition.component'
import {ConnexionComponent } from './vue_public/connexion/connexion.component'
import {FinanceComponent } from './vue_public/finance/finance.component'
import { DeconnexionComponent } from './deconnexion/deconnexion.component'

@NgModule({
  imports: [
    RouterModule.forRoot([
      
     {path: '', component: FinanceComponent, pathMatch: 'full'},
     {path: 'finance', component: FinanceComponent, pathMatch: 'full'},
     {path: 'inscription', component: ForminscritionComponent, pathMatch: 'full'},
     {path: 'connexion', component: ConnexionComponent, pathMatch: 'full'},
     {path: 'deconnexion', component: DeconnexionComponent, pathMatch: 'full'}
    ])
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

