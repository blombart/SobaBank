import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { agents } from '../../modeles/agent';
import { Agent } from '../../modeles/agent';
import { DemandeService} from '../../Service/demande.service';
import { DemandeOuvertureCompte} from '../../modeles/demandeOuvertureCompte'
import {Router} from '@angular/router';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'
  ]
})
export class DemandeComponent implements OnInit {
	demandes :  Observable<DemandeOuvertureCompte[]>;
  liste: boolean
  constructor(private demandeService: DemandeService, private _router: Router) {
   }

  ngOnInit() {
  	this.demandes= this.demandeService.getDemandesOuverture();
  }

  test(){
    this.liste = true;
  }
  }
