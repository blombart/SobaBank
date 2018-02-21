import { Component, OnInit } from '@angular/core';
import {AgentService} from '../../../Service/agent.service';
import {DemandeModificationMdp} from '../../../modeles/demandes';
import { CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-mdp',
  templateUrl: './mdp.component.html',
  styleUrls: ['../../../bootstrap/css/bootstrap.css']
})

export class MdpComponent implements OnInit {

 //private demandeService = new DemandeService();

	demandesMdp: DemandeModificationMdp[] ;
  id:number;
  constructor(private agentservice: AgentService, private cookieService: CookieService) { }

  ngOnInit() {
        this.id = Number(this.cookieService.get("id"));
  	this.getAllDemandeMdp();
  }

getAllDemandeMdp(){
	//Pour le moment attribut de l'id rentré en dur, passé par cookie par la suite
	this.agentservice.getAllDemandesMdp(this.id).subscribe(
		demMdp => {
			this.demandesMdp = demMdp;
		},
      err => {
        console.log(err);
      }
      );
	}
}
