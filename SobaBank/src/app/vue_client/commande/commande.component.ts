import { Component, OnInit } from '@angular/core';
import {Compte} from '../../modeles/compte';
import {Demande} from '../../modeles/demandes';
import {DemandeChequier} from '../../modeles/demandes';
import {ClientService} from '../../Service/client.service';
import { Client} from '../../modeles/client';
import { CookieService} from 'angular2-cookie/core';



@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],

    providers: [ClientService]


})
export class CommandeComponent implements OnInit {



  comptes: Compte[];
  compteSelectione: Compte;
  id: number

  constructor(private clientService: ClientService, private cookieService: CookieService) {
   }

 ngOnInit() {
   this.id = Number(this.cookieService.get("id"));
this.findAllComptes();
  }

findAllComptes(){
  this.clientService.findAllComptes(this.id).subscribe(
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

     this.clientService.createDemandeChequier(this.id).subscribe(
        reponse => {
          console.log("demande de chequier transmise");
        },
        err => {
      console.log(err);
        });
  }



}
