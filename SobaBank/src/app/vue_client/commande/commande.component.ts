import { Component, OnInit } from '@angular/core';
import {Compte} from '../../modeles/compte';
import {Demande} from '../../modeles/demandes';
import {DemandeChequier} from '../../modeles/demandes';
import {ClientService} from '../../Service/client.service';
import { Client} from '../../modeles/client';




@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],

    providers: [ClientService]


})
export class CommandeComponent implements OnInit {



  comptes: Compte[];
  compteSelectione: Compte;

  constructor(private clientService: ClientService) {
   }

 ngOnInit() {
this.findAllComptes();
  }

findAllComptes(){
  this.clientService.findAllComptes(1).subscribe(
    cptes => {
      this.comptes=cptes;
    },
    err => {
      console.log(err);
    }
);
}

selectCompte(compte: Compte){
  this.compteSelectione = compte;
}

  onClick(){

     this.clientService.createDemandeChequier(1).subscribe(
        reponse => {
          console.log("demande de chequier transmise");
        },
        err => {
      console.log(err);
        });
  }



}
