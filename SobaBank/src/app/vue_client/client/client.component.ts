import { Component, OnInit } from '@angular/core';
import { Client} from './client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
   styleUrls: ['../../bootstrap/css/bootstrap.css']
})
export class ClientComponent implements OnInit {




    clients = [new Client('LILLE','0630451325','5','marié')  ,   new Client('Paris','0123456789','3','célibataire')];

  constructor() { }

  ngOnInit() {
  }

}
