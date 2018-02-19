import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Http, Response, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Client} from '../modeles/client';
import {clients} from '../modeles/client';
import {Agent} from '../modeles/agent';
import {Compte} from '../modeles/compte';
import {CompteEpargne} from '../modeles/compte';
import {Operation} from '../modeles/operation';
import {DemandeChequier,DemandeModificationMdp,DemandeNouveauCompte} from '../modeles/demandes'


@Injectable()
export class ClientService {
//NOUVELLE VERSION QUI UTILISE LES WEB SERVICES DEPUIS LE BACK
  private apiUrl = "http://localhost:8080/SpringAngularStartProject/";

constructor(private http: Http) { }



findAllComptes(idClient: number):Observable<Compte[]>{
  return this.http.get(this.apiUrl + "clients/" + idClient + "/allComptes")
    .map((res: Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}


//On recupere l'ensemble des comptes pour un client
getAllComptes(idClient: number):Observable<Compte[]>{
  return this.http.get(this.apiUrl + "clients/" + idClient + "/comptes")
    .map((res: Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}

//On recupere un compte
getCompte(idCompte: number):Observable<Compte>{
  return this.http.get(this.apiUrl + "comptes/" + idCompte)
    .map((res: Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}

//On recupere un compte epargne
getAllComptesEpargne(idClient: number):Observable<CompteEpargne[]>{
  return this.http.get(this.apiUrl + "clients/" + idClient + "/comptesEpargne")
    .map((res: Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}

//On recupere l'ensemble des operations pour un compte
getAllOperations(idCompte: number):Observable<Operation[]>{
  return this.http.get(this.apiUrl + "comptes/" + idCompte + "/operations")
    .map((res: Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}

//On recupere les operations pour un mois donné
getAllOperationsFiltered(idCompte: number, mois):Observable<Operation[]>{
  //On definit le body request
  let urlSearchParams = new URLSearchParams();
  urlSearchParams.append("mois", mois);

  return this.http.post(this.apiUrl + "comptes/" + idCompte + "/operations/filter", urlSearchParams)
    .map((res: Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}

/* getNotifications(idClient: number) :Observable<Operation[]>{
  return this.http.get(this.apiUrl + "comptes/" + idCompte + "/operations")
    .map((res: Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}*/


//On creer une demande de mot de passe pour le client
//TODO pas sure au niveau du null pour le post 
createDemandeMdp(idClient: number):Observable<DemandeModificationMdp>{
  return this.http.post(this.apiUrl + "clients/" + idClient + "/demandes/mdp", null)
     .map((res: Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}

//On creeer une demande de chequier pour le client
//TODO pas sure au niveau du null pour le post 
createDemandeChequier(idClient: number):Observable<DemandeChequier>{
  return this.http.post(this.apiUrl + "clients/" + idClient + "/demandes/chequier", null)
     .map((res: Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}

//on cree une demande de nouveau compte pour le client et on lui passe le compte en parametre
createDemandeNouveauCompte(idClient: number, compte: Compte):Observable<DemandeNouveauCompte>{
  return this.http.post(this.apiUrl + "clients/" + idClient + "/demandes/nouveauCompte", compte)
     .map((res: Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}

virementInterne(idCompteDebit, idCompteCredit, montant,libelle):Observable<Boolean>{
   let urlSearchParams = new URLSearchParams();
  urlSearchParams.append("idCompteDebit", idCompteDebit);
  urlSearchParams.append("idCompteCredit", idCompteCredit);
  urlSearchParams.append("montant", montant);
  urlSearchParams.append("libelle", libelle);
  return this.http.post(this.apiUrl + "virement/interne",urlSearchParams)
     .map((res: Response) => res.json())
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}

virementExterne(idCompteDebit, rib, montant,libelle):Observable<Boolean>{
   let urlSearchParams = new URLSearchParams();
  urlSearchParams.append("idCompteDebit", idCompteDebit);
  urlSearchParams.append("rib", rib);
  urlSearchParams.append("montant", montant);
  urlSearchParams.append("libelle", libelle);
  return this.http.post(this.apiUrl + "virement/externe",urlSearchParams)
     .map((res: Response) => res.json())
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}

getAgent(idClient):Observable<Agent>{
  return this.http.get(this.apiUrl + "clients/" + idClient + "/agent")
       .map((res: Response) => res.json())
       .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}

//ANCIENNE VERSION EN DUR
clients = clients;

  getClient(id) {
    for(let client of clients){
      if(client.id ===id){
        return client;
      }
    }
  }

  getClients(): Observable<Client[]>{
      return of(clients);
    }

  addClient(client: Client){
      this.clients.push(client);
    }


  supprimerClient(client: Client){
    this.clients.splice(this.findIndexOfCurrentClient(client)-1,1);
  }

  getMaxId(){
   let tempId: number;
   let maxId: number =0;
   for(let client of clients){
     tempId = client.id;
     if(tempId>maxId){
       maxId = client.id;
     }
   } return maxId;
  }

  //On recherche l'index de l'client dans le tableau pour un id donné

  private findIndexOfCurrentClient(clientBis: Client){

    let i: number =0;
    let finalIndex: number;

    for(let client of clients){
      i++;
      
      if(client.id === clientBis.id){
        finalIndex = i ;
        break;
      }
    }
    
    return finalIndex;
  }

  }
