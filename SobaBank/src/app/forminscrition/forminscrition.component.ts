import { Component, OnInit } from '@angular/core';
import {User} from './user'

@Component({
  selector: 'app-forminscrition',
  templateUrl: './forminscrition.component.html',
  styleUrls: ['../bootstrap/css/bootstrap.css']
})
export class ForminscritionComponent implements OnInit {

	utilisateur: User;

  constructor() {
  		this.utilisateur = new User("Hadjaz", "Abderrahmane", "moui@test.com", "0626865421")

   }

  ngOnInit() {

this.utilisateur = new User("Hadjaz", "Abderrahmane", "moui@test.com", "0626865421")

  }

  ngOnSubmit(){
  	console.log("L'utilisateur est" + this.utilisateur.nom+" " + this.utilisateur.prenom)
  }

}
