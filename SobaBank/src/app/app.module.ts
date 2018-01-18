import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FinanceComponent } from './vue_public/finance/finance.component';
import { NavbarComponent } from './vue_public/navbar/navbar.component';
import { ForminscritionComponent } from './vue_public/forminscrition/forminscrition.component';

import { provideRoutes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { ConnexionComponent } from './vue_public/connexion/connexion.component';
import { AccueilAgentComponent } from './vue_agent/accueil-agent/accueil-agent.component';
import { ListeDemandesComponent } from './vue_agent/liste-demandes/liste-demandes.component';
import { RechercheComponent } from './vue_agent/recherche/recherche.component';
import { NavbarAgentComponent } from './vue_agent/navbar-agent/navbar-agent.component';
import { ListeClientComponent } from './vue_agent/liste-client/liste-client.component';
import { FilterPipe} from './vue_agent/liste-client/filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    FinanceComponent,
    NavbarComponent,
    ForminscritionComponent,
    ConnexionComponent,
    AccueilAgentComponent,
    ListeDemandesComponent,
    RechercheComponent,
    NavbarAgentComponent,
    ListeClientComponent,
    FilterPipe
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
