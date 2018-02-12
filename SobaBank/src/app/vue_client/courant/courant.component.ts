import { Component, OnInit } from '@angular/core';
import {Operation} from '../comptes/operation';


@Component({
  selector: 'app-courant',
  templateUrl: './courant.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css']
})

export class CourantComponent implements OnInit {

 operations = [new Operation('12/01/18','debit',500.00,1) ,   new Operation('12/01/18','debit',750.00,2)];


  constructor() { }

  ngOnInit() {
  }

}
