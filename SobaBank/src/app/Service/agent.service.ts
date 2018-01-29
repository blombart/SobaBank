import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
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

  	getAgents(){
  		return Observable.of(agents);
  	}
}
