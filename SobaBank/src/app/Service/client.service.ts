import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import {Client} from '../modeles/client';
import {clients} from '../modeles/client';


@Injectable()
export class ClientService {

clients = clients;
  constructor() {
  }

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
