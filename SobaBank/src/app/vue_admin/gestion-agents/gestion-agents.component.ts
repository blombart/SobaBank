import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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
  constructor(private agentService: AgentService) { }

  ngOnInit() {
  	this.agents = this.agentService.getAgents();
  }

  setAgent(){	
  }
}
