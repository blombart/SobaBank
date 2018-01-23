import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import {ConnexionComponent } from './vue_public/connexion/connexion.component';
import {ForminscritionComponent} from './vue_public/forminscrition/forminscrition.component'


@NgModule({
  imports: [
    RouterModule.forRoot([
      
     {path: '', redirectTo: '/admin', pathMatch: 'full'},
     {path: 'inscription', component: ForminscritionComponent, pathMatch: 'full'},
     {path: 'connexion', component: ConnexionComponent, pathMatch: 'full'},

    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }