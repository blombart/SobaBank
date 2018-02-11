import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Router} from '@angular/router';

import { Validators, FormControl, FormGroup} from '@angular/forms';

import { Agent } from '../../modeles/agent';
import { AgentService} from '../../Service/agent.service';
import {AdminService} from '../../Service/admin.service';

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
  private agents: Agent[];
	
	searchText: string;

  constructor(private agentService: AgentService, private _router: Router, private adminService: AdminService) { }


  ngOnInit() {
  	
    this.getAllAgents();

    this.formRecherche = new FormGroup({
    'recherche' : new FormControl('',[Validators.required])


    });
    this.submitted= false;
  }

 getAllAgents(){
    this.adminService.findAll().subscribe(
      agents => {
        this.agents = agents;
      },
      err => {
        console.log(err);
      }
      );
      
    }

  modifierAgent(i: number){
    this._router.navigate(["./admin/agents",i]);
    
  }

  supprimerAgent(i: number){
    this.adminService.deleteAgentById(i).subscribe(
      bool => {
        if (bool===true){console.log("suppresion effectué");}
      });
  }

//on recupere le champ input et on filtre le tableau d'agent selon si le nom ou matricule correspond a la recherche
  onSubmit() {
  	this.searchText = this.formRecherche.get('recherche').value;
  	this.agents.filter(agent => agent.nom.includes(this.searchText) || agent.matricule.includes(this.searchText));
}

//Renvoie vers le formulaire vide pour ajouter un agent

  ajoutAgent(){
    this._router.navigate(["./admin/agents/0"]);
  }



}