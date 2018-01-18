import { Component, OnInit, Input } from '@angular/core';
import {User} from './user'

@Component({
  selector: 'app-forminscrition',
  templateUrl: './forminscrition.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css']
})
export class ForminscritionComponent implements OnInit {

	@Input() utilisateur: any;

  constructor() {
  		 this.utilisateur = new User("Hadjaz", "Abderrahmane", "moui@test.com", "0626865421", "guest")
       this.utilisateur.password = "1234";
   }

  ngOnInit() {

  this.utilisateur = new User("Hadjaz", "Abderrahmane", "moui@test.com", "0626865421", "guest")
  this.utilisateur.password = "1234";
  }

  ngOnSubmit(){
  	//console.log("L'utilisateur est" + this.utilisateur.nom+" " + this.utilisateur.prenom)
  }

}
