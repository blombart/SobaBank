import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FinanceComponent } from './vue_public/finance/finance.component';
import { NavbarComponent } from './vue_public/navbar/navbar.component';
import { ForminscritionComponent } from './vue_public/forminscrition/forminscrition.component';

import { provideRoutes} from '@angular/router';
import { AdminModule } from './vue_admin/admin/admin.module';
import { AccueilAgentModule} from './vue_agent/accueil-agent/accueil-agent.module';
import { AppRoutingModule } from './app-routing.module';
import { ConnexionComponent } from './vue_public/connexion/connexion.component';



@NgModule({
  declarations: [
    AppComponent,
    FinanceComponent,
    NavbarComponent,
    ForminscritionComponent,
    ConnexionComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    AdminModule, AccueilAgentModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }