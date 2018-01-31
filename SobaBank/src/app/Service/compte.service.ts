import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import {Compte} from '../modeles/compte';
import {compte} from '../modeles/compte';
import {CompteEpargne} from '../modeles/compte';
import {Operation} from '../modeles/operation';
import {operations} from '../modeles/operation';
import {OperationService} from '../Service/operation.service'

@Injectable()



export class CompteService {


	operationService = new OperationService();

    comptes = compte;


    

  constructor() { }

	getCompte(numCompte) {
    return this.comptes[numCompte];
  }


    addCompte(compte: Compte){
      this.comptes.push(compte);
    }

     getAllComptes(){

	return this.comptes;
    }
    
  }


