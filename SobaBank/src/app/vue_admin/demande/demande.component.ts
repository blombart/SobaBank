import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { agents } from '../../modeles/agent';
import { Agent } from '../../modeles/agent';
import { DemandeService} from '../../Service/demande.service';

import { DemandeOuvertureCompte} from '../../modeles/demandeOuvertureCompte';
import {Router} from '@angular/router';
/*import {AdminService} from '../../Service/admin.service';*/

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css']
  ]
})
export class DemandeComponent implements OnInit {

	demandes :  Observable<DemandeOuvertureCompte[]>;
  affectation: boolean = false;

  idDemAffect : number;

  constructor(private demandeService: DemandeService, private _router: Router, /*private adminService: AdminService*/) {

   }

  ngOnInit() {
  	this.demandes= this.demandeService.getDemandesOuverture();
  }


  //on initialise l'id de la demande a affecter avec l'id de la demande selectionner
  affecter(i: number){

    this.idDemAffect = i;

    //On met la valeur a true pour afficher le composant liste agent
    this.affectation= true;
  }

  resetAffectation(event){
    this.affectation = event.value;
  }
  }

