import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MainClientRoutingModule } from './main-client-routing.module';
import {VirementComponent } from '../../vue_client/virement/virement.component';
import {CommandeComponent } from '../../vue_client/commande/commande.component';
import {MdpComponent } from '../../vue_client/mdp/mdp.component';
import {ComptesComponent } from '../../vue_client/comptes/comptes.component';
import {CourantComponent } from '../../vue_client/courant/courant.component';
import {ClientComponent } from '../../vue_client/client/client.component';
import {EpargneComponent } from '../../vue_client/epargne/epargne.component';
import { AgentComponent } from '../../vue_client/agent/agent.component';
import {MainClientComponent} from './main-client.component';
import {NavcliComponent} from '../../vue_client/navcli/navcli.component';
import { ClientAccueilComponent } from '../../vue_client/client-accueil/client-accueil.component';
import { ClientNotificationsComponent } from '../../vue_client/client-notifications/client-notifications.component';


@NgModule({
  imports: [
    CommonModule,
    MainClientRoutingModule,
    FormsModule,ReactiveFormsModule 
  ],
  declarations: [NavcliComponent,
  MainClientComponent,
    ClientComponent,
    ComptesComponent,
    VirementComponent,
    CommandeComponent,
    MdpComponent,
    CourantComponent,
    EpargneComponent,
    AgentComponent,
    ClientAccueilComponent,
    ClientNotificationsComponent
    ]
})
export class MainClientModule { }
