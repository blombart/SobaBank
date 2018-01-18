import { Component, OnInit } from '@angular/core';
import { Client} from './client';


@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css']
})
export class ListeClientComponent implements OnInit {


     clients = [new Client("durant","patrick", "16 rue de la liberté 59000 Lille", "0102030405"), 
     new Client("dant","paick" , "17 rue de la liberté 59000 Lille", "0102030406")]
	
  constructor() { }

  ngOnInit() {
  }

}
