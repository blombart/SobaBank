import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup} from '@angular/forms';
import { agents } from '../test_class/modelAgents'
import { Agent } from '../test_class/agent'

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
	formRecherche : FormGroup
	submitted: boolean;
	agents = agents;
	agentRecherche: Agent;

  constructor() {
  	
  }

  ngOnInit() {
  	this.formRecherche = new FormGroup({
		'recherche' : new FormControl('',[Validators.required])

  	});
  	this.submitted= false;
  }

  onSubmit(){
  	this.rechercheAgent(this.formRecherche.get('recherche').value);
  	if(this.agentRecherche != null){
  		this.submitted = true;
  		console.log("true"  + this.agentRecherche.nom);
  	} else {
  		this.submitted = false;
  		console.log("false");

  	}
  }

  rechercheAgent(nom: String){
  	let agentfiltre: Agent[];

  	agentfiltre = this.agents.filter(
res => res.nom === nom
  		);

  	if(agentfiltre.length !=0){
  		this.agentRecherche = agentfiltre[0];
  	} else{
  		this.agentRecherche = null;
  	}
 	
  }

}
