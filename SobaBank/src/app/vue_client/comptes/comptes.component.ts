import { Component, OnInit } from '@angular/core';
import { Compte} from '../../modeles/compte';
import {Operation} from '../../modeles/operation';
import { CompteEpargne} from '../../modeles/compte';
import { ClientService} from '../../Service/client.service';
import { OperationService} from '../../Service/operation.service';
import { Client} from '../../modeles/client';


@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],
  providers: [ClientService]
})
export class ComptesComponent implements OnInit {


	 idCompteSelectionne: number;

    comptes: Compte[];
    operations:Operation[];
    epargnes:CompteEpargne[];

    //epargnes : CompteEpargne[];
    
   
  selectedCompte : Compte;


  constructor(private clientService:ClientService) { }

  ngOnInit() {


   this.getAllComptes();


   this.getAllComptesEpargne();


  }

getAllComptes(){
  this.clientService.getAllComptes(1).subscribe(
    cptes => {
      this.comptes=cptes;
    },
    err => {
      console.log(err);
    }
);
}
 getAllComptesEpargne(){
  this.clientService.getAllComptesEpargne(1).subscribe(
    epgnes => {
      this.epargnes=epgnes;
    },
    err => {
      console.log(err);
    }
    );

}
  getAllOperations(){
    console.log("dans getoperation id: " + this.idCompteSelectionne);
this.clientService.getAllOperations(this.idCompteSelectionne).subscribe(
    op => {
      this.operations=op;
    },
    err => {
      console.log(err);
  }
  );
}

   selectCompte(compte :Compte) {

    this.idCompteSelectionne=compte.id;
    console.log(this.idCompteSelectionne);
        this.getAllOperations();

  }
}