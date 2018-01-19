import { Component, OnInit } from '@angular/core';
import { Client} from '../liste-client/client';

@Component({
  selector: 'app-liste-demandes',
  templateUrl: './liste-demandes.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css']
})
export class ListeDemandesComponent implements OnInit {


     clients = [new Client("001","durant","patrick", "abc@xxx.com", "16 rue de la liberté 59000 Lille", "0102030405", "marié"), 
     new Client("002", "dant","paick" , "abc@xxx.com", "17 rue de la liberté 59000 Lille", "0102030406", "pacsé"),
     new Client("003" , "devant","luc" , "abc@xxx.com", "98 rue du pont d'avignon 62000 Arras", "0102030407" , "célibataire")]

  constructor() { }

  ngOnInit() {
  }

}
