import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AccueilAgentRoutingModule } from './accueil-agent-routing.module';

import { AccueilAgentComponent } from '../../vue_agent/accueil-agent/accueil-agent.component';
import { ListeDemandesComponent } from '../../vue_agent/liste-demandes/liste-demandes.component';
import { NavbarAgentComponent } from '../../vue_agent/navbar-agent/navbar-agent.component';
import { ListeClientComponent } from '../../vue_agent/liste-client/liste-client.component';
import { FilterPipe} from '../../vue_agent/liste-client/filter-pipe';
import { NavbarDemandesComponent } from '../../vue_agent/navbar-demandes/navbar-demandes.component';
import { DetailsDemandesComponent } from '../../vue_agent/details-demandes/details-demandes.component';
import { ChequierComponent } from '../../vue_agent/liste-demandes/chequier/chequier.component';
import { NewCompteComponent } from '../../vue_agent/liste-demandes/new-compte/new-compte.component';
import { AgentService} from '../../Service/agent.service';

import { DemandeClientComponent } from '../../vue_agent/liste-demandes/demande-client/demande-client.component';


@NgModule({
  imports: [
    CommonModule,
    AccueilAgentRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [AccueilAgentComponent,
    ListeDemandesComponent,
    NavbarAgentComponent,
    ListeClientComponent,
    FilterPipe,
    NavbarDemandesComponent,
    DemandeClientComponent,

    DetailsDemandesComponent,
    ChequierComponent,
    NewCompteComponent],


  providers: [AgentService]

})
export class AccueilAgentModule { }