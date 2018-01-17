import { Component, OnInit } from '@angular/core';
import { User } from '../forminscrition/user'
 
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css']
})
export class ConnexionComponent implements OnInit {

  utilisateur: User;

  constructor() {
  this.utilisateur = new User("Hadjaz", "Abderrahmane", "moui@test.com", "0626865421")
  this.utilisateur.password = "123456";
   }

  ngOnInit() {
  	this.utilisateur = new User("Hadjaz", "Abderrahmane", "moui@test.com", "0626865421")
  	this.utilisateur.password = "123456";
  }

  ngOnSubmit(){
  	console.log("Nom: "+ this.utilisateur.nom);
  }

}
