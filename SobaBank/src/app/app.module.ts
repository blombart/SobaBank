import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FinanceComponent } from './vue_public/finance/finance.component';
import { NavbarComponent } from './vue_public/navbar/navbar.component';
import { ForminscritionComponent } from './vue_public/forminscrition/forminscrition.component';
import { ClientComponent } from './vue_client/client/client.component';
import { ComptesComponent } from './vue_client/comptes/comptes.component';

import { provideRoutes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { ConnexionComponent } from './vue_public/connexion/connexion.component';
import { NavbaroComponent } from './vue_client/navbaro/navbaro.component';
import { VirementComponent } from './vue_client/virement/virement.component';
import { CommandeComponent } from './vue_client/commande/commande.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ComptesComponent,
    FinanceComponent,
    NavbarComponent,
    ForminscritionComponent,
    ConnexionComponent,
    NavbaroComponent,
    VirementComponent,
    CommandeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
