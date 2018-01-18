import { Component, OnInit, Input, Output, Directive } from '@angular/core';
import {Item} from './item';
import {User} from '../forminscrition/user'
import {AppComponent} from '../../app.component'




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css']
})
export class NavbarComponent implements OnInit {
    
    

    @Input() role: any;


    /*role: String;*/
    items: Item[] 


	

  constructor() {
    //this.role =  "guest"

    
  	    //Definir le type de navbar (guest, client, agent, admin)

      




  	}

  ngOnInit() {

if (this.role == "guest"){

//console.log("Entré ds condition ngInit");

         this.items  = [
	new Item(1, 'finance','Accueil'),
  new Item(2, 'inscription', 'Inscription'),
  new Item(3, 'connexion', 'Connexion')
  
];



}

if (this.role == "client"){
         this.items  = [
	new Item(1, 'finance','Accueil'),
  new Item(2, 'mesComptes', 'Mes comptes'),
  new Item(3, 'deconnexion', 'Me déconnecter')
  
];
    
  }
}

}

