import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import {Agent} from '../modeles/agent';
import {agents} from '../modeles/agent';


@Injectable()
export class AgentService {

agents = agents;
  constructor() {
  }

	getAgent(id) {
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
  findIndexOfCurrentAgent(agentBis: Agent){
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

