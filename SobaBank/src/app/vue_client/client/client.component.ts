import { Component, OnInit } from '@angular/core';
import { Client} from './client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
   styleUrls: ['../../bootstrap/css/bootstrap.css']
})
export class ClientComponent implements OnInit {

client: Client;

  constructor() { 
  	this.client= new Client("Hadjaz", "0123456",  "0626865421","moui@test.com")}

  ngOnInit() {
  		this.client= new Client("Hadjaz", "0123456", "0626865421","moui@test.com")}

  }

}
