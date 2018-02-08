import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import {FicheInfo} from '../modeles/ficheInfo';
import {fichesInfos} from '../modeles/ficheInfo';


@Injectable()
export class AgentService {

fichesInfos = fichesInfos;
  constructor() { }

	getFicheInfo(id) {
    return this.fichesInfos[id-1];
  }

  	getFichesInfos(): Observable<FicheInfo[]>{
  		return of(fichesInfos);
  	}



  	addFicheInfo(fiche: FicheInfo){

  		this.fichesInfos.push(fiche);

  	}
}