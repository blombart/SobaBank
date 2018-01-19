import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FinanceComponent } from './vue_public/finance/finance.component';
import { NavbarComponent } from './vue_public/navbar/navbar.component';
import { ForminscritionComponent } from './vue_public/forminscrition/forminscrition.component';

import { provideRoutes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { ConnexionComponent } from './vue_public/connexion/connexion.component';
import { AdminComponent } from './vue_admin/admin/admin.component';
import { FormAgentsComponent } from './vue_admin/form-agents/form-agents.component';
import { NavbarAdminComponent } from './vue_admin/navbar-admin/navbar-admin.component';
import { DemandeComponent } from './vue_admin/demande/demande.component';
import { RechercheComponent } from './vue_admin/recherche/recherche.component';
import { AgentRechercheComponent } from './vue_admin/agent-recherche/agent-recherche.component';
import {AgentService} from './vue_admin/test_class/agent.service';

@NgModule({
  declarations: [
    AppComponent,
    FinanceComponent,
    NavbarComponent,
    ForminscritionComponent,
    ConnexionComponent,
    AdminComponent,
    FormAgentsComponent,
    NavbarAdminComponent,
    DemandeComponent,
    RechercheComponent,
    AgentRechercheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [AgentService],
  bootstrap: [AppComponent]
})
export class AppModule { }