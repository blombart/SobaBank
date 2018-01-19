import { Component, OnInit } from '@angular/core';
import { Demande } from '../test_class/demande';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'
  ]
})
export class DemandeComponent implements OnInit {
	dem : Demande = new Demande("a","b","c", new Date());
	dem1 : Demande = new Demande("a1","b1","c1", new Date());
	dem2 : Demande = new Demande("a2","b2","c2", new Date());
	dem3 : Demande = new Demande("a3","b3","c3", new Date());
	demandes :  Demande[];

  constructor() {
   }

  ngOnInit() {
  	this.demandes= [this.dem, this.dem1, this.dem2, this.dem3];
  }


}
