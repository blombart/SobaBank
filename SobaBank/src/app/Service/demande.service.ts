import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import {DemandeOuvertureCompte} from '../modeles/demandeOuvertureCompte';
import {demandesOuverture} from '../modeles/demandeOuvertureCompte';
import {DemandeChequier} from '../modeles/demandeChequier';
import {demandeChequier} from '../modeles/demandeChequier';

@Injectable()
export class DemandeService {

demandeChequier = demandeChequier;
demandesOuverture = demandesOuverture;


  constructor() { }



  getDemandeChequier(id) {
    for(let dem of demandeChequier){
      if(dem.id ===id){
        return dem;
      }
    }
  }


    getDemandesChequier(): Observable<DemandeChequier[]>{
      return of(demandeChequier);
    }


 

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

