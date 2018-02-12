  import { Component, OnInit } from '@angular/core';
import { Agent} from '../../modeles/agent';
import { AgentService} from '../../Service/agent.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],
  providers: [AgentService]
})
export class AgentComponent implements OnInit {


agents :  Observable<Agent[]>;
	


  constructor(private agentService : AgentService){}

  ngOnInit() {

 this.agents= this.agentService.getAgents();
}



}