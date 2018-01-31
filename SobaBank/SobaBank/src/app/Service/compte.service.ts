import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import {Compte} from '../modeles/compte';
import {compte} from '../modeles/compte';
import {CompteEpargne} from '../modeles/compte';


@Injectable()
export class CompteService {

  compte = compte;
  constructor() { }

	getCompte(numCompte) {
    return this.compte[numCompte];
  }


    addCompte(compte: Compte){
      this.compte.push(compte);
    }


    
  }


