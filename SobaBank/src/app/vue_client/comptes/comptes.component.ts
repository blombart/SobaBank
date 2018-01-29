import { Component, OnInit } from '@angular/core';
import {Operation} from './operation';
import {Compte} from './compte';
import {Epargne} from '../epargne/epargne';


@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css']
})
export class ComptesComponent implements OnInit {

comptes = [new Compte(500.00,1) ,   new Compte(750.00,2)];

epargnes = [new Epargne(1,10000)];

  constructor() { }

  ngOnInit() {
  }

}
