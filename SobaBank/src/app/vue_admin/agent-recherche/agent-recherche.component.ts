import { Component, OnInit, Input} from '@angular/core';

import {Agent } from '../../modeles/agent';


@Component({
  selector: 'app-agent-recherche',
  templateUrl: './agent-recherche.component.html',
  styleUrls: ['./agent-recherche.component.css']
})
export class AgentRechercheComponent implements OnInit {
	@Input() agentRecherche : Agent;
	id: string;

  constructor() { }

  ngOnInit() {
  	this.id = this.agentRecherche.id.toString();
  	console.log(this.id);
  }

}
