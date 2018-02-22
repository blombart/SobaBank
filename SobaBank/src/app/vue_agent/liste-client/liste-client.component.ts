import { Component, OnInit } from '@angular/core';
import { Client} from '../../modeles/client';
import { AgentService} from '../../Service/agent.service';
import { CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css']
})
export class ListeClientComponent implements OnInit {

	private clients: Client[];
  id:number

  constructor(private agentService: AgentService, private cookieService: CookieService) { }

  ngOnInit() {
    this.id = Number(this.cookieService.get("id"));
  	this.getAllClients();
  }

  getAllClients(){
    console.log("appelle de la méthode getAllclients");
  	//Pour le moment attribut de l'id rentré en dur, passé par cookie par la suite
  	this.agentService.getAllClients(this.id).subscribe(
  		clients => {
  			this.clients = clients;
  		})
  }

}
