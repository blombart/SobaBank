import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import {Client} from '../modeles/client';
import {clients} from '../modeles/client';

import {CompteEpargne} from '../modeles/compte';
import {Operation} from '../modeles/operation';
import {operations} from '../modeles/operation';
import {OperationService} from '../Service/operation.service'


@Injectable()



export class ClientService {


  //operationService = new OperationService();

    clients = clients;
   
    

  constructor() { }

  getClient(id) {
    return this.clients[id];
  }


   /* addClient(client: Client){
      this.clients.push(client);
    }*/

     getAllclients(){

  return this.clients;
    }

  
    
  }


