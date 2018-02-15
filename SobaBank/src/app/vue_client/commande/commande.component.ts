import { Component, OnInit } from '@angular/core';
/*import {DemandeService} from '../../Service/demande.service';*/
import {Compte} from '../../modeles/compte';
import {Demande} from '../../modeles/demandes';
import { Observable } from 'rxjs/Observable';
import {DemandeChequier} from '../../modeles/demandes';
/*import {demandeChequier} from '../../modeles/demandes';*/
import {CompteService} from '../../Service/compte.service';

import {ClientService} from '../../Service/client.service';
import { Client} from '../../modeles/client';




@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],

    providers: [/*DemandeService*/,CompteService]
})
export class CommandeComponent implements OnInit {



	
  constructor(private clientService: ClientService, private compteService:CompteService) {
   }
//private demandeService: DemandeService
 ngOnInit() {
  	
  }

  

/*onSubmit(id: number){
  
	this.demandes= this.demandeService.getDemandeModificationMdp();
  console.log(this.demandes);
  }*/

  onClick(id: number){
}



  }

