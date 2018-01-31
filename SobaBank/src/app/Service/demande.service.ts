import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import {DemandeOuvertureCompte} from '../modeles/demandeOuvertureCompte';
import {demandesOuverture} from '../modeles/demandeOuvertureCompte';


@Injectable()
export class DemandeService {

demandesOuverture = demandesOuverture

  constructor() { }


  	getDemandesOuverture(): Observable<DemandeOuvertureCompte[]>{
  		return of(demandesOuverture);
  	}

  }

