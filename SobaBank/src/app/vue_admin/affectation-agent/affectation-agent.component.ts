import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { agents } from '../../modeles/agent';
import { Agent } from '../../modeles/agent';
import { AgentService} from '../../Service/agent.service';
import { DemandeService} from '../../Service/demande.service';
import { AdminService} from '../../Service/admin.service';
import { Observable} from 'rxjs/Observable';
import {DemandeOuvertureCompte} from '../../modeles/demandeOuvertureCompte';

@Component({
  selector: 'app-affectation-agent',
  templateUrl: './affectation-agent.component.html',
  styleUrls: ['./affectation-agent.component.css'],
})
export class AffectationAgentComponent implements OnInit {

	//On recoit du composant parent l'id de la demande a affecter
	@Input() demId :  number;

	//on envoie le boolean une fois l'affectatin effectué
	@Output() affected = new EventEmitter()

	agents : Observable<Agent[]>; 
	agentSelected: Agent;

  constructor(private agentService: AgentService, private demandeService:DemandeService, private adminService : AdminService) { }


  ngOnInit() {
  	this.agents = this.agentService.getAgents();
  	console.log("id de la demande" + this.demId);
  }

  //on recoit l'agent selectionner
  selectAgent(_agentSelected: Agent): void{
  	this.agentSelected = _agentSelected;
  }
  
  //on recherche la demande correspondant a l'id et on affecte la demande a l'agent
  onClick(){
  	this.adminService.affecterDemande(this.agentSelected.id, this.demId).subscribe(
      bool => {
        console.log(bool);
      });
  	this.affected.emit(false);
  }
}
