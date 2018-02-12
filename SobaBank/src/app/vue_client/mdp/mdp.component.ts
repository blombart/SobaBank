import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { demandeModificationMdp} from '../../modeles/demandes';
import { DemandeModificationMdp} from '../../modeles/demandes';
import { DemandeService} from '../../Service/demande.service';
import { ClientService} from '../../Service/client.service';
import { demandeModificationMdp} from '../../modeles/demandes';

import { Client} from '../../modeles/client';
import { clients} from '../../modeles/client';



@Component({
  selector: 'app-mdp',
  templateUrl: './mdp.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],
  providers: [DemandeService,ClientService]
})
export class MdpComponent implements OnInit {

	//On recupere le tableau de demande
	allDemande :  Observable<DemandeModificationMdp[]>;

	// on declare une variable de type demandemdp
	demandeMdp : DemandeModificationMdp;

	//On instancie une variable id qui prends comme valeur 12 pour recupere le client dans le tableau de client
	id : number = 12;


	//on declare une variable de type client
	client : Client; 

  constructor(private clientService: ClientService, private demandeService:DemandeService) {
   }
//private demandeService: DemandeService
 ngOnInit() {
 	//On initialise le client en allant chercher via le service le client dans le tableau de client
  	this.client = this.clientService.getClient(this.id);
  	
  }

  
/*onSubmit(id: number){
  
	this.demandes= this.demandeService.getDemandeModificationMdp();
  console.log(this.demandes);
  }*/

  onClick(id: number){
  
  //ON initialise le tableau de demande en utilisant le service correspondant
  	this.allDemande= this.demandeService.getDemandeModificationMdp();
  	//ON initialise la demande de modification en allant chercher la premiere occurence (position 0) de la demande dans le tableau de demandes
  	this.demandeMdp = this.allDemande[0];

/*  	//taille du tableau de demandes pour le client doit etre egale a 0
  	console.log("Avant ajout demande, taille tableau : " + this.client.demandes.length);
  	//Pour le client on recupere son tableau de demande et on lui insert (via la methode push) la demande qui a été recupere
  	this.client.demandes.push(this.demandeMdp);

  	//Comme test on affiche la taille du tableau de demande des clients . doit etre egale à 1 si l'ajout a bien été fait
  	console.log("Apres ajout, taille tableau: " + this.client.demandes.length);*/
  }
}