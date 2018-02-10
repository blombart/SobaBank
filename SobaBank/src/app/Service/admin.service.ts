import { Injectable } from '@angular/core';
import {Agent} from '../modeles/agent';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AdminService {
	private apiUrl = "http://localhost:8080/sobabank/admin/";

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
  
  affecterDemande(idAgent: number, idDemande: number): Observable<boolean> {
    return this.http.post(this.apiUrl + "agents/" +idAgent+"/demandes/"+idDemande+"/affecte",null)
    .map((res: Response) => Boolean)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  
  
  deleteAgentById(id: number): Observable<boolean>{
    return this.http.delete(this.apiUrl + "agents/"+id,null)
    .map((res: Response) => Boolean)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  }
