import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import {Agent} from '../modeles/agent';
import {agents} from '../modeles/agent';


@Injectable()
export class AgentService {

agents = agents;
  constructor() { }

	getAgent(id) {
    return this.agents[id-1];
  }

  	getAgents(): Observable<Agent[]>{
  		return of(agents);
  	}

  	addAgent(agent: Agent){
  		this.agents.push(agent);
  	}
}
