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


   CompteSelectionne: Compte;

    comptes: Compte[];
    operations:Operation[];
    epargnes:CompteEpargne[];
    

    //epargnes : CompteEpargne[];
    
   
  //selectedCompte : Compte;


  constructor(private clientService:ClientService) { }

  ngOnInit() {


   this.getAllComptes();


   this.getAllComptesEpargne();

   //this.getAllOperations();

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
    console.log("dans getoperation id: " + this.CompteSelectionne.id);
this.clientService.getAllOperations(this.CompteSelectionne.id).subscribe(
    op => {
      this.operations=op;
    },
    err => {
      console.log(err);
  }
  );
}

   selectCompte(compte :Compte) {

    this.CompteSelectionne=compte;
    console.log(this.CompteSelectionne);
        this.getAllOperations();

  }
}
