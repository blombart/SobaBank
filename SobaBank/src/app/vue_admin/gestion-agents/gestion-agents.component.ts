import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Router} from '@angular/router';


import { agents } from '../../modeles/agent';
import { Agent } from '../../modeles/agent';
import { AgentService} from '../../Service/agent.service';

@Component({
  selector: 'app-gestion-agents',
  templateUrl: './gestion-agents.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css','../../bootstrap/css/bootstrap-grid.css']
})
export class GestionAgentsComponent implements OnInit {

	agents : Observable<Agent[]>;
	searchText: string;

  constructor(private agentService: AgentService, private _router: Router) { }


  ngOnInit() {
  	this.agents = this.agentService.getAgents();
  }



  modifierAgent(i: number){
    this._router.navigate(["./admin/agents",i]);
    console.log(i);
  }


  maRecherche (event) {
  	this.searchText = event.value;
  	this.agents = this.agents.map((agents) => agents.filter(agent => agent.nom.includes(this.searchText) || agent.matricule.includes(this.searchText)));
}


//Renvoie vers le formulaire vide pour ajouter un agent

  ajoutAgent(){
    this._router.navigate(["./admin/agents/0"]);
  }

}