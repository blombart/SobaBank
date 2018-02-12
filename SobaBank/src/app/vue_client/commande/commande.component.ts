import { Component, OnInit } from '@angular/core';
import {DemandeService} from '../../Service/demande.service';
import {Compte} from '../../modeles/compte';
import {comptes} from '../../modeles/compte';
import {Demande} from '../../modeles/demandes';
import { Observable } from 'rxjs/Observable';
import {DemandeChequier} from '../../modeles/demandes';
import {demandeChequier} from '../../modeles/demandes';
import {CompteService} from '../../Service/compte.service';


@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],
    providers: [DemandeService,CompteService]
})
export class CommandeComponent implements OnInit {

private demandeService= new DemandeService();

private compteService= new CompteService();


  constructor() { }

demande=demandeChequier
   
comptes: Compte= comptes;

  ngOnInit() {
  	this.comptes = this.compteService.getAllComptes();
  
this.demandeService.addDemandeChequier(this.demande);

}

}

