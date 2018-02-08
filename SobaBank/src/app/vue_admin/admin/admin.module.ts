//fichier qui contient l'import de l'ensemble des composant necessaire pour la vue admin

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import {AdminComponent } from './admin.component';
import {FormAgentsComponent} from '../../vue_admin/form-agents/form-agents.component';
import {DemandeComponent} from '../../vue_admin/demande/demande.component';
import {NavbarAdminComponent} from '../../vue_admin/navbar-admin/navbar-admin.component';
import {AgentService} from '../../Service/agent.service';
import {DemandeService} from '../../Service/demande.service';
import { GestionAgentsComponent } from '../../vue_admin/gestion-agents/gestion-agents.component';
import {AffectationAgentComponent} from '../affectation-agent/affectation-agent.component';
import {AdminService} from '../../Service/admin.service';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [AdminComponent,
  FormAgentsComponent,
  DemandeComponent,
  NavbarAdminComponent,
  GestionAgentsComponent,
  AffectationAgentComponent],

  providers: [AgentService, DemandeService,AdminService]

})
export class AdminModule { }
