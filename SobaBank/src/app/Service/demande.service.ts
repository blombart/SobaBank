import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import {DemandeOuvertureCompte} from '../modeles/demandeOuvertureCompte';
import {demandesOuverture} from '../modeles/demandeOuvertureCompte';


@Injectable()
export class DemandeService {

demandesOuverture = demandesOuverture

  constructor() { }


	getDemandeOuverture(id) {
    for(let dem of demandesOuverture){
      if(dem.id ===id){
        return dem;
      }
    }
  }

  	getDemandesOuverture(): Observable<DemandeOuvertureCompte[]>{
  		return of(demandesOuverture);
  	}

  }

