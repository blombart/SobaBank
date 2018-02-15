import { Component, OnInit } from '@angular/core';
import { comptes} from '../../modeles/compte';
import { Compte} from '../../modeles/compte';
import {Operation} from '../../modeles/operation';
import { CompteEpargne} from '../../modeles/compte';
import { epargnes} from '../../modeles/compte';
import { CompteService} from '../../Service/compte.service';
import { OperationService} from '../../Service/operation.service';
import { Client} from '../../modeles/client';
import { clients } from '../../modeles/client';
import { operations} from '../../modeles/operation';


@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],
  providers: [CompteService, OperationService]
})
export class ComptesComponent implements OnInit {


	 private compteService = new CompteService();
   private operationService = new OperationService();

    comptes: Compte= comptes;
    operations:Operation= operations;
    epargnes:CompteEpargne=epargnes;

    //epargnes : CompteEpargne[];
    
    client : Client[] = clients;
  selectedCompte : Compte;

  constructor() { }

  ngOnInit() {


   this.comptes= this.compteService.getAllComptes();

   //this.epargnes = this.compteService.getAllComptesEpargne();
   this.operations = this.operationService.getAllOperations();

   this.epargnes = this.compteService.getAllComptesEpargne();


  }

   selectCompte(compte) {
    console.log("Compte selectionné");
    this.selectedCompte = compte;

  }
}