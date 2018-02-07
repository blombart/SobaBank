import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import {Client} from '../modeles/client';
import {clients} from '../modeles/client';


@Injectable()
export class ClientService {

   clients = clients;
  constructor() { }

	getClient(id) {
    return this.clients[id-1];
  }

  	getClients(): Observable<Client[]>{
  		return of(clients);
  	}

  	addClient(client: Client){
  		this.clients.push(client);
  	}


    getAllClients() {
      return [new Client(1,"nom", "prenom","dfhdfh","zezet","sdfgsdg","qqdgqdgqdg","dsdgsdgqsdgg",2,"sdkjjghksjdgh", 
      null, null  )];
    }
  }