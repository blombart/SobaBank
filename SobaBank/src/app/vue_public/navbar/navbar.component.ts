import { Component, OnInit } from '@angular/core';
import {Item} from './item'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css']
})
export class NavbarComponent implements OnInit {

	items  = [
	new Item(1, 'finance','Accueil'),
  new Item(2, 'inscription', 'Inscription'),
  new Item(3, 'connexion', 'Connexion')
  
];;

  constructor() {

  	}

  ngOnInit() {


    
  }

}
