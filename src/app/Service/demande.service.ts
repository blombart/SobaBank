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

@Injectable()
export class DemandeService {

demandesOuverture = demandesOuverture

demandeModificationMdp= demandeModificationMdp
comptes = comptes

  constructor() { }


    getDemandesOuverture(): Observable<DemandeOuvertureCompte[]>{
      return of(demandesOuverture);
    }

    getDemandeModificationMdp(): Observable<Demande[]>{
      return of(demandeModificationMdp);
    }
 getcomptes(): Observable<Compte[]>{
      return of(comptes);
    }

  }
