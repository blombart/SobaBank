import { Injectable } from '@angular/core';
import {Agent} from '../modeles/agent';
import { Http, Response, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from "rxjs/Observable";
import {DemandeOuvertureCompte} from '../modeles/demandeOuvertureCompte';

@Injectable()
export class AdminService {
	private apiUrl = "http://localhost:8080/SpringAngularStartProject/";

  constructor(private http: Http) { }

  findAll(): Observable<Agent[]> {
  	return this.http.get(this.apiUrl + "agents")
  		.map((res: Response) => res.json())
  		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<Agent> {
  	return this.http.get(this.apiUrl +"agents/" + id)
  		.map((res: Response) => res.json())
  		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  saveAgent(agent: Agent): Observable<Agent>{
    return this.http.post(this.apiUrl + "agents", agent)
    .map((res: Response) => res.json())
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateAgent(agent: Agent): Observable<Agent>{
    return this.http.put(this.apiUrl + "agents", agent)
    .map((res: Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  
  affecterDemande(idAgent, idDemande): Observable<boolean> {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('idAgent', idAgent);
    urlSearchParams.append('idDemande', idDemande);
    console.log("methode affectation");
    return this.http.post(this.apiUrl + "affecte", urlSearchParams)
    .map((res: Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    
  }

  getAllDemandesOuverture():Observable<DemandeOuvertureCompte[]>{
    return this.http.get(this.apiUrl + "demandes")
      .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  
  
  deleteAgentById(id: number): Observable<boolean>{
    return this.http.delete(this.apiUrl + "agents/"+id,null)
    .map((res: Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  inscription(nom,prenom,email,adresse,numTel,nbEnfants,situationMatrimonial):Observable<boolean>{
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('nom', nom);
    urlSearchParams.append('prenom', prenom);
    urlSearchParams.append('email', email);
    urlSearchParams.append('adresse', adresse);
    urlSearchParams.append('numTel', numTel);
    urlSearchParams.append('nbEnfants', nbEnfants);
    urlSearchParams.append('situationMatrimonial', situationMatrimonial);
    return this.http.post(this.apiUrl + "inscription",urlSearchParams)
    .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  }
