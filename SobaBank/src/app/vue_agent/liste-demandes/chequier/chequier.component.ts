import { Component, OnInit } from '@angular/core';
import { Client} from '../../liste-client/client';
import {DemandeChequier} from '../../../modeles/demandes';
import {AgentService} from '../../../Service/agent.service';
import { CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-chequier',
  templateUrl: './chequier.component.html',
  styleUrls: ['../../../bootstrap/css/bootstrap.css']
})

export class ChequierComponent implements OnInit {

	//private demandeService = new DemandeService();

	demandesChequier: DemandeChequier[] ;
  id:number

  constructor(private agentservice: AgentService, private cookieService: CookieService) { }

  ngOnInit() {
    this.id = Number(this.cookieService.get("id"));
  	this.getAllDemandeChequier();
  }

getAllDemandeChequier(){
	//Pour le moment attribut de l'id rentré en dur, passé par cookie par la suite
	this.agentservice.getAllDemandesChequier(this.id).subscribe(
		demChequier => {
			this.demandesChequier = demChequier;
		},
      err => {
        console.log(err);
      }
      );
	}

}
