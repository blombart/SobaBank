import { Component, OnInit } from '@angular/core';
import {DemandeService} from '../../Service/demande.service';
import {Compte} from '../../modeles/compte';
import {comptes} from '../../modeles/compte';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],
    providers: [DemandeService]
})
export class CommandeComponent implements OnInit {

private demandeService= new DemandeService();


  constructor() { }


   
comptes: Compte= comptes;

  ngOnInit() {
  	this.comptes = this.demandeService.getcomptes();
  }

}


