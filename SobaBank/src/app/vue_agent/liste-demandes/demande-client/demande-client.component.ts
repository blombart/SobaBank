import { Component, OnInit } from '@angular/core';
import { DemandeOuvertureCompte} from '../../../modeles/demandeOuvertureCompte';
import { AgentService} from '../../../Service/agent.service';
@Component({
  selector: 'app-demande-client',
  templateUrl: './demande-client.component.html',
  styleUrls: ['./demande-client.component.css']
})
export class DemandeClientComponent implements OnInit {

	demandesClient: DemandeOuvertureCompte[];

  constructor(private agentService: AgentService) { }

  ngOnInit() {
  	this.getAllDemandesOuverture();
  }

  getAllDemandesOuverture(){
  	//Pour le moment attribut de l'id rentré en dur, passé par cookie par la suite
  	this.agentService.getAllDemandesOuverture(1).subscribe(
  		dems => {
  			this.demandesClient = dems;
  		})
  }
}
