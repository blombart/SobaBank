import { Component, OnInit } from '@angular/core';
import { Client} from '../../liste-client/client';
import { AgentService} from '../../../Service/agent.service';
import {DemandeNouveauCompte} from '../../../modeles/demandes';
@Component({
  selector: 'app-new-compte',
  templateUrl: './new-compte.component.html',
  styleUrls: ['../../../bootstrap/css/bootstrap.css']
})
export class NewCompteComponent implements OnInit {

	demandesNouveauCompte : DemandeNouveauCompte[]
  constructor(private agentservice: AgentService) { }

  ngOnInit() {
  	this.getAllDemandeNouveauCompte()
  }

  getAllDemandeNouveauCompte(){
  	//Pour le moment attribut de l'id rentré en dur, passé par cookie par la suite
  	this.agentservice.getAllDemandesNouveauCompte(1).subscribe(
  		demNew => {
  			this.demandesNouveauCompte = demNew;
  		},err => {
        console.log(err);
      })
  }

  

}
