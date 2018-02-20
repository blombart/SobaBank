  import { Component, OnInit } from '@angular/core';
import { ClientService} from '../../Service/client.service';
//import { Client} from '../../modeles/client';
import { Agent} from '../../modeles/agent';


@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],
  providers: [ClientService]
})

export class AgentComponent implements OnInit {


agent: Agent;
	
  constructor(private clientService : ClientService){
  }

  ngOnInit() {
	this.getAgent();
}


getAgent(){
  this.clientService.getAgent(1).subscribe(
    agt => {
      this.agent = agt;

    },
    err => {
      console.log(err);
    }
    );
}
}