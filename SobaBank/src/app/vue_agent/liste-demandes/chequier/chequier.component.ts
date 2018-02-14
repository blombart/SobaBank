import { Component, OnInit } from '@angular/core';
import { Client} from '../../liste-client/client';
import {DemandeChequier} from '../../../modeles/demandes';
import {AgentService} from '../../../Service/agent.service';


@Component({
  selector: 'app-chequier',
  templateUrl: './chequier.component.html',
  styleUrls: ['../../../bootstrap/css/bootstrap.css']
})

export class ChequierComponent implements OnInit {

	//private demandeService = new DemandeService();

	demandesChequier: DemandeChequier[] ;

  constructor(private agentservice: AgentService) { }

  ngOnInit() {
  	this.getAllDemandeChequier();
  }

getAllDemandeChequier(){
	//Pour le moment attribut de l'id rentré en dur, passé par cookie par la suite
	this.agentservice.getAllDemandesChequier(1).subscribe(
		demChequier => {
			this.demandesChequier = demChequier;
		},
      err => {
        console.log(err);
      }
      );
	}

}
