import { Component, OnInit } from '@angular/core';
import { agents } from '../../modeles/agent';
import { Agent } from '../../modeles/agent';
import { AgentService} from '../../Service/agent.service';
import { Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-affectation-agent',
  templateUrl: './affectation-agent.component.html',
  styleUrls: ['./affectation-agent.component.css']
})
export class AffectationAgentComponent implements OnInit {
	agents : Observable<Agent[]>; 
	agentSelected: Agent;
  constructor(private agentService: AgentService) { }

  ngOnInit() {
  	this.agents = this.agentService.getAgents();
  }

  selectAgent(_agentSelected: Agent): void{
  	this.agentSelected = _agentSelected;
  }
  
  onClick(ag: Agent){
  	
  }
}
