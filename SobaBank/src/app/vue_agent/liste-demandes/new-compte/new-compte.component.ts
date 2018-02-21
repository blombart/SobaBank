import { Component, OnInit } from '@angular/core';
import { Client} from '../../liste-client/client';
import { AgentService} from '../../../Service/agent.service';
import {DemandeNouveauCompte} from '../../../modeles/demandes';
import { CookieService} from 'angular2-cookie/core';
@Component({
  selector: 'app-new-compte',
  templateUrl: './new-compte.component.html',
  styleUrls: ['../../../bootstrap/css/bootstrap.css']
})
export class NewCompteComponent implements OnInit {

	demandesNouveauCompte : DemandeNouveauCompte[]
    id:number;
  constructor(private agentservice: AgentService, private cookieService: CookieService) { }

  ngOnInit() { this.id = Number(this.cookieService.get("id"));
  	this.getAllDemandeNouveauCompte()
  }

  getAllDemandeNouveauCompte(){
  	//Pour le moment attribut de l'id rentré en dur, passé par cookie par la suite
  	this.agentservice.getAllDemandesNouveauCompte(this.id).subscribe(
  		demNew => {
  			this.demandesNouveauCompte = demNew;
  		},err => {
        console.log(err);
      })
  }

  

}
