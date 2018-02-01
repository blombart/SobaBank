import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { agents } from '../../modeles/agent';
import { Agent } from '../../modeles/agent';
import { DemandeService} from '../../Service/demande.service';
import { DemandeOuvertureCompte} from '../../modeles/demandeOuvertureCompte'



@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'
  ]
})
export class DemandeComponent implements OnInit {

	demandes :  Observable<DemandeOuvertureCompte[]>;

  constructor(private demandeService: DemandeService) {
   }

  ngOnInit() {
  	this.demandes= this.demandeService.getDemandesOuverture();
  }


  }

