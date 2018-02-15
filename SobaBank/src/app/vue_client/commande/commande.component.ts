import { Component, OnInit } from '@angular/core';
/*import {DemandeService} from '../../Service/demande.service';*/
import {Compte} from '../../modeles/compte';
import {comptes} from '../../modeles/compte';
import {Demande} from '../../modeles/demandes';
import { Observable } from 'rxjs/Observable';
import {DemandeChequier} from '../../modeles/demandes';
/*import {demandeChequier} from '../../modeles/demandes';*/
import {CompteService} from '../../Service/compte.service';

import {ClientService} from '../../Service/client.service';
import { Client} from '../../modeles/client';
import { clients} from '../../modeles/client';



@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],

    providers: [/*DemandeService*/,CompteService]
})
export class CommandeComponent implements OnInit {

  //On recupere le tableau de demande
	allDemande :  Observable<DemandeChequier[]>;

demandechequier : DemandeChequier;
//demande=demandeChequier
   
comptes: Compte= comptes;

//On instancie une variable id qui prends comme valeur 12 pour recupere le client dans le tableau de client
	id : number = 12;


	//on declare une variable de type client
	client : Client; 

    selectedCompte : Compte;


	
  constructor(private clientService: ClientService, private compteService:CompteService) {
   }
//private demandeService: DemandeService
 ngOnInit() {

 	this.comptes = this.compteService.getAllComptes();


 	//this.demandeService.addDemandeChequier(this.demande);


 	//On initialise le client en allant chercher via le service le client dans le tableau de client
  	this.client = this.clientService.getClient(this.id);
  	
  }

  

/*onSubmit(id: number){
  
	this.demandes= this.demandeService.getDemandeModificationMdp();
  console.log(this.demandes);
  }*/

  onClick(id: number){
  
/*  //ON initialise le tableau de demande en utilisant le service correspondant
  	this.allDemande= this.demandeService.getDemandesChequier();
  	//ON initialise la demande de modification en allant chercher la premiere occurence (position 0) de la demande dans le tableau de demandes
  	this.demandechequier = this.allDemande[0];

  	//taille du tableau de demandes pour le client doit etre egale a 0
  	console.log("Avant ajout demande, taille tableau : " + this.client.demandes.length);
  	//Pour le client on recupere son tableau de demande et on lui insert (via la methode push) la demande qui a été recupere
  	this.client.demandes.push(this.demandechequier);


  	//Comme test on affiche la taille du tableau de demande des clients . doit etre egale à 1 si l'ajout a bien été fait
  	console.log("Apres ajout, taille tableau: " + this.client.demandes.length);*/
  }


    selectCompte(compte) {
    console.log("Compte selectionné");
    this.selectedCompte = compte;
  }
}

