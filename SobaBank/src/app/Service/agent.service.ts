import { Injectable } from '@angular/core';
import {Agent,agents} from '../modeles/agent';
import {Client} from '../modeles/client';
import {DemandeChequier,DemandeModificationMdp,DemandeNouveauCompte} from '../modeles/demandes'
import { Http, Response, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';
import { Observable } from "rxjs/Observable";


@Injectable()
export class AgentService {

  //Nouvelle version qui appelle le web service depuis le back
  private apiUrl = "http://localhost:8080/sobabank/";

constructor(private http: Http) { }

//Methode pour recupere la liste des clients pour un agent
getAllClients(idAgent: number):Observable<Client[]>{
  return this.http.get(this.apiUrl + "agents/" + idAgent + "/clients")
    .map((res: Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}

//Methode pour editer un client
updateClient(client :Client):Observable<Client>{
  return this.http.put(this.apiUrl + "clients", client)
  .map((res: Response) => res.json())
  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}

//on recupere les documents d'un client
getDocuments(idClient: number):Observable<File[]>{
  return this.http.get(this.apiUrl + "clients/" + idClient + "/documents")
  .map((res: Response) => res.json())
  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}

//On recupere la liste des demandes de chequier pour un agent
getAllDemandesChequier(idAgent: number):Observable<DemandeChequier[]>{
return this.http.get(this.apiUrl + "agents/" + idAgent + "/demandes/chequier")
  .map((res: Response) => res.json())
  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}

//on edite une demande de chequier(validé ou non)
updateDemandeChequier(demChequier: DemandeChequier):Observable<DemandeChequier>{
  return this.http.put(this.apiUrl + "demandes/chequier", demChequier)
  .map((res: Response) => res.json())
  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}

//On recupere la liste des demandes de mdp pour un agent
getAllDemandesMdp(idAgent: number):Observable<DemandeModificationMdp[]>{
return this.http.get(this.apiUrl + "agents/" + idAgent + "/demandes/mdp")
  .map((res: Response) => res.json())
  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}


//On edite une demande de mdp (validé ou non)
updateDemandeMdp(demMdp: DemandeModificationMdp):Observable<DemandeModificationMdp>{
  return this.http.put(this.apiUrl + "demandes/mdp", demMdp)
  .map((res: Response) => res.json())
  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}

//On recupere la liste des demandes de nouveau compte pour un agent
getAllDemandesNouveauCompte(idAgent: number):Observable<DemandeModificationMdp[]>{
return this.http.get(this.apiUrl + "agents/" + idAgent + "/demandes/nouveauCompte")
  .map((res: Response) => res.json())
  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}


//On edite une demande de nouveau compte (validé ou non)
updateDemandeNouveauCompte(demNouveauCompte: DemandeNouveauCompte):Observable<DemandeModificationMdp>{
  return this.http.put(this.apiUrl + "demandes/nouveauCompte", demNouveauCompte)
  .map((res: Response) => res.json())
  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}

//ANCIENNE VERSION EN DUR
agents = agents;


  getAgentById(id) {
    for(let agent of agents){
      if(agent.id ===id){
        return agent;
      }
    }
  }

  getAgents(): Observable<Agent[]>{
  		return of(agents);
  	}

  addAgent(agent: Agent){
  		this.agents.push(agent);
  	}


  supprimerAgent(agent: Agent){
    this.agents.splice(this.findIndexOfCurrentAgent(agent)-1,1);
  }

  getMaxId(){
   let tempId: number;
   let maxId: number =0;
   for(let agent of agents){
     tempId = agent.id;
     if(tempId>maxId){
       maxId = agent.id;
     }
   } return maxId;
  }

  //On recherche l'index de l'agent dans le tableau pour un id donné

  private findIndexOfCurrentAgent(agentBis: Agent){

    let i: number =0;
    let finalIndex: number;

    for(let agent of agents){
      i++;
      
      if(agent.id === agentBis.id){
        finalIndex = i ;
        break;
      }
    }
    
    return finalIndex;
  }

  }

