import { Component, OnInit } from '@angular/core';
import { Client} from '../../liste-client/client';
import {ClientService} from '../../../Service/client.service'
@Component({
  selector: 'app-chequier',
  templateUrl: './chequier.component.html',
  styleUrls: ['../../../bootstrap/css/bootstrap.css'],
  providers: [ClientService]
})
export class ChequierComponent implements OnInit {



clientService = new ClientService();


clients = this.clientService.getAllClients;



  constructor() { }

  ngOnInit() {

  	
  }

}
