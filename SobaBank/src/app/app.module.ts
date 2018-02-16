import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FinanceComponent } from './vue_public/finance/finance.component';
import { NavbarComponent } from './vue_public/navbar/navbar.component';
import { ForminscritionComponent } from './vue_public/forminscrition/forminscrition.component';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import { provideRoutes} from '@angular/router';

//import des modules des diffentes vue qui contiennent l'import de tous les composant necessaire
import { AdminModule } from './vue_admin/admin/admin.module';
import { AccueilAgentModule} from './vue_agent/accueil-agent/accueil-agent.module';
import { MainClientModule } from './vue_client/main-client/main-client.module';
import { ConnexionComponent } from './vue_public/connexion/connexion.component';
import { AccueilAgentComponent } from './vue_agent/accueil-agent/accueil-agent.component';
import { ListeDemandesComponent } from './vue_agent/liste-demandes/liste-demandes.component';
import { NavbarAgentComponent } from './vue_agent/navbar-agent/navbar-agent.component';
import { ListeClientComponent } from './vue_agent/liste-client/liste-client.component';
import { FilterPipe} from './vue_agent/liste-client/filter-pipe';
import { NavbarDemandesComponent } from './vue_agent/navbar-demandes/navbar-demandes.component';
import { DetailsDemandesComponent } from './vue_agent/details-demandes/details-demandes.component';
import {SharedService}  from './Service/shared-service';

import { AppRoutingModule } from './app-routing.module';

import {DeconnexionComponent} from './deconnexion/deconnexion.component';





@NgModule({
  declarations: [
    AppComponent,
    FinanceComponent,
    NavbarComponent,
    ForminscritionComponent,
    ConnexionComponent,
    DeconnexionComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AdminModule, AccueilAgentModule, MainClientModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [SharedService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }