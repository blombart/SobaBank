import { Component, OnInit } from '@angular/core';
import { DemandeOuvertureCompte} from '../../../modeles/demandeOuvertureCompte';
import { AgentService} from '../../../Service/agent.service';
import { CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-demande-client',
  templateUrl: './demande-client.component.html',
  styleUrls: ['../../../bootstrap/css/bootstrap.css']
})
export class DemandeClientComponent implements OnInit {

	demandesClient: DemandeOuvertureCompte[];
  id:number;

  constructor(private agentService: AgentService, private cookieService: CookieService) { }

  ngOnInit() {
    this.id = Number(this.cookieService.get("id"));
  	this.getAllDemandesOuverture();
  }

  getAllDemandesOuverture(){
  	//Pour le moment attribut de l'id rentré en dur, passé par cookie par la suite
  	this.agentService.getAllDemandesOuverture(this.id).subscribe(
  		dems => {
  			this.demandesClient = dems;
  		});
  }

  valider(idDemande : number){
      this.agentService.validDemande(idDemande).subscribe(
        demande=> {console.log("demande validé")},
      err => {
        console.log(err);
      }); 
  }
}
