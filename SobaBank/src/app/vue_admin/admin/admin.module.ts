import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import {AdminComponent } from './admin.component';
import {FormAgentsComponent} from '../../vue_admin/form-agents/form-agents.component';
import {DemandeComponent} from '../../vue_admin/demande/demande.component';
import {NavbarAdminComponent} from '../../vue_admin/navbar-admin/navbar-admin.component';
import {RechercheComponent} from '../../vue_admin/recherche/recherche.component';
import {AgentRechercheComponent} from '../../vue_admin/agent-recherche/agent-recherche.component'
import {AgentService} from '../../vue_admin/test_class/agent.service'

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
  RechercheComponent,
  AgentRechercheComponent],
  providers: [AgentService]

})
export class AdminModule { }
