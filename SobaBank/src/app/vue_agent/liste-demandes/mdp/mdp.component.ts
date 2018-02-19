import { Component, OnInit } from '@angular/core';
import {AgentService} from '../../../Service/agent.service';
import {DemandeModificationMdp} from '../../../modeles/demandes';

@Component({
  selector: 'app-mdp',
  templateUrl: './mdp.component.html',
  styleUrls: ['../../../bootstrap/css/bootstrap.css']
})

export class MdpComponent implements OnInit {

 //private demandeService = new DemandeService();

	demandesMdp: DemandeModificationMdp[] ;

  constructor(private agentservice: AgentService) { }

  ngOnInit() {
  	this.getAllDemandeMdp();
  }

getAllDemandeMdp(){
	//Pour le moment attribut de l'id rentré en dur, passé par cookie par la suite
	this.agentservice.getAllDemandesMdp(1).subscribe(
		demMdp => {
			this.demandesMdp = demMdp;
		},
      err => {
        console.log(err);
      }
      );
	}
}
