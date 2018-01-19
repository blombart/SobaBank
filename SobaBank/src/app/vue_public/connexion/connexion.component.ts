import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from '../forminscrition/user'

import {SharedService} from '../../service/shared-service'

 
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css']
})
export class ConnexionComponent implements OnInit {

     utilisateur: User;
     role: String;
   
    //@Input() role: any;

   //@Output()  changeUser = new EventEmitter;


 

  constructor(  private _sharedService: SharedService) {
 /*this.utilisateur = new User("Hadjaz", "Abderrahmane", "moui@test.com", "0626865421","")
  this.utilisateur.password = "123456";
  this.utilisateur.role = this.role;*/



   }

  ngOnInit() {
  	/*this.utilisateur = new User("Hadjaz", "Abderrahmane", "moui@test.com", "0626865421","")

  	this.utilisateur.password = "123456";
  	this.utilisateur.role = this.role;*/
  	/*this.utilisateur = new User("Hadjaz", "Abderrahmane", "moui@test.com", "0626865421", "guest")
  	this.utilisateur.password = "123456";
  	this.utilisateur.role ="guest";*/
  }

  onClick(){
  this._sharedService.emitChange(this.role);

 }

  ngOnSubmit(){
  	//console.log("Nom: "+ this.utilisateur.nom);
      //this.EditUser.emit(this.utilisateur);
      
    
  }

}
