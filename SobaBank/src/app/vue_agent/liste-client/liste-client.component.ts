import { Component, OnInit } from '@angular/core';
import { Client} from '../../modeles/client';
import { AgentService} from '../../Service/agent.service';


@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css']
})
export class ListeClientComponent implements OnInit {

	private clients: Client[];

  constructor(private agentService: AgentService) { }

  ngOnInit() {
  	this.getAllClients();
  }

  getAllClients(){
  	//Pour le moment attribut de l'id rentré en dur, passé par cookie par la suite
  	this.agentService.getAllClients(1).subscribe(
  		clients => {
  			this.clients = clients;
  		})
  }

}
