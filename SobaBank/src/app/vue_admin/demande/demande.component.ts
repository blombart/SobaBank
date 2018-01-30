import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Demande } from '../test_class/demande';
import { agents } from '../../modeles/agent';
import { Agent } from '../../modeles/agent';
import { AgentService} from '../../Service/agent.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'
  ]
})
export class DemandeComponent implements OnInit {
  agents : Observable<Agent[]>;

	dem : Demande = new Demande("a","b","c", new Date());
	dem1 : Demande = new Demande("a1","b1","c1", new Date());
	dem2 : Demande = new Demande("a2","b2","c2", new Date());
	dem3 : Demande = new Demande("a3","b3","c3", new Date());
	demandes :  Demande[];

  constructor(private service: AgentService) {
   }

  ngOnInit() {
  	this.demandes= [this.dem, this.dem1, this.dem2, this.dem3];
    this.agents = this.service.getAgents();
  }

  test(){
    for(let ag of agents){
      console.log(ag.nom);
    }
  }
}
