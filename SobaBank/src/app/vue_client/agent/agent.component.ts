  import { Component, OnInit} from '@angular/core';
import { Agent} from '../../modeles/agent';
import { ClientService} from '../../Service/client.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],
  providers: [ClientService]
})
export class AgentComponent implements OnInit {


	ag: Agent;
	


  constructor(private clientService : ClientService){}

  ngOnInit() {
  	this.clientService.getAgent(1).subscribe(
  		agent => {this.ag = agent;});
}




}