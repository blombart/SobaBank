import { Component, OnInit } from '@angular/core';
import{Compte} from'../../modeles/compte';
import{comptes} from'../../modeles/compte';
import{clients} from'../../modeles/client';
import { Client} from '../../modeles/client';
import { CompteService} from '../../Service/compte.service';

@Component({
  selector: 'app-liste-demandes',
  templateUrl: './liste-demandes.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],
providers: [CompteService]
})
export class ListeDemandesComponent implements OnInit {


private compteService = new CompteService();
  // private operationService = new OperationService();

    comptes: Compte= comptes;
   // operations:Operation= operations;

    //epargnes : CompteEpargne[];
    
    client : Client[] = clients;
  //selectedCompte : Compte;

  constructor() { }

  ngOnInit() {


   this.comptes= this.compteService.getAllComptes();

 }
}