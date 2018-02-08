import { Component, OnInit } from '@angular/core';
import { Client} from '../../liste-client/client';
import {DemandeChequier} from '../../../modeles/demandeChequier';
import {demandeChequier} from '../../../modeles/demandeChequier';
import {DemandeService} from '../../../Service/demande.service';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-chequier',
  templateUrl: './chequier.component.html',
  styleUrls: ['../../../bootstrap/css/bootstrap.css'],
  providers: [DemandeService]
})

export class ChequierComponent implements OnInit {

	//private demandeService = new DemandeService();

	demandeChequier: Observable<DemandeChequier[]> ;

  constructor(private demandeService :DemandeService) { }

  ngOnInit() {

this.demandeChequier = this.demandeService.getDemandesChequier();


  }

}
