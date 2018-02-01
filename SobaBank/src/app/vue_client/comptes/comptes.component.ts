import { Component, OnInit } from '@angular/core';

import { Operation} from './operation';
import { Compte} from '../../modeles/compte';
import { Epargne} from '../epargne/epargne';
import { CompteService} from '../../Service/compte.service';



@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',

  styleUrls: ['../../bootstrap/css/bootstrap.css'],
  providers: [CompteService]
})
export class ComptesComponent implements OnInit {


	private compteService = new CompteService();


comptes = [new Compte(500.00,1) ,   new Compte(750.00,2)];

epargnes = [new Epargne(1,10000)];



  constructor() { }

  ngOnInit() {


   this.comptes = this.compteService.getAllComptes();


  }
}

