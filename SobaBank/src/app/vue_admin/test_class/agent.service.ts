import { Injectable } from '@angular/core';
import {Agent} from './agent';
import {agents} from './modelAgents';


@Injectable()
export class AgentService {

agents = agents;
  constructor() { }

	getAgent(id) {
    return this.agents[id-1];
  }
}
