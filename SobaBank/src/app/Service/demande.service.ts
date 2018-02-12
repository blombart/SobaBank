import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import {DemandeOuvertureCompte} from '../modeles/demandeOuvertureCompte';
import {demandesOuverture} from '../modeles/demandeOuvertureCompte';
import {Demande} from '../modeles/demandes';
import {demandeModificationMdp} from '../modeles/demandes';
import {DemandeModificationMdp} from '../modeles/demandes';
import {Compte} from '../modeles/compte';
import {comptes} from '../modeles/compte';
import {DemandeChequier} from '../modeles/demandes';
import {demandeChequier} from '../modeles/demandes';

@Injectable()
export class DemandeService {

demandeChequier = demandeChequier;
demandesOuverture = demandesOuverture;
demandeModificationMdp= demandeModificationMdp

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


  addDemandeOuverture(dem: DemandeOuvertureCompte){
      this.demandesOuverture.push(dem);
    }

  getDemandeModificationMdp(): Observable<Demande[]>{
      return of(demandeModificationMdp);
    }
 //getcomptes(): Observable<Compte[]>{
    //  return of(comptes);
   // }


  addDemandeChequier(demande: DemandeChequier){
  this.demandeChequier.push(demande);

}  


  }

