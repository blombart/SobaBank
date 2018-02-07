import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Router} from '@angular/router';

import { Validators, FormControl, FormGroup} from '@angular/forms';


import { agents } from '../../modeles/agent';
import { Agent } from '../../modeles/agent';
import { AgentService} from '../../Service/agent.service';

@Component({
  selector: 'app-gestion-agents',
  templateUrl: './gestion-agents.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css',
  '../../bootstrap/css/bootstrap-grid.css',
  './gestion-agents.component.css']
})
export class GestionAgentsComponent implements OnInit {
  formRecherche : FormGroup;
  submitted: boolean;




	agents : Observable<Agent[]>;
	searchText: string;

  constructor(private agentService: AgentService, private _router: Router) { }


  ngOnInit() {
  	this.agents = this.agentService.getAgents();

    this.formRecherche = new FormGroup({
    'recherche' : new FormControl('',[Validators.required])


    });
    this.submitted= false;
  }


  modifierAgent(i: number){
    this._router.navigate(["./admin/agents",i]);
    
  }

  supprimerAgent(i: number){

    let agentASuppr: Agent = this.agentService.getAgent(i);
    //On verifie que l'agent ne possede pas de client pour le supprimer
    if(agentASuppr.clients.length == 0){
      this.agentService.supprimerAgent(agentASuppr)}
    else{
      console.log("impossible de supprimer, l'agent a des clients");}


  }

//on recupere le champ input et on filtre le tableau d'agent selon si le nom ou matricule correspond a la recherche
  onSubmit() {
  	this.searchText = this.formRecherche.get('recherche').value;
  	this.agents = this.agents.map((agents) => agents.filter(agent => agent.nom.includes(this.searchText) || agent.matricule.includes(this.searchText)));
}

//Renvoie vers le formulaire vide pour ajouter un agent

  ajoutAgent(){
    this._router.navigate(["./admin/agents/0"]);
  }



}
