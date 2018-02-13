import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../service/shared-service'; //Ne pas mettre dans les providers sinon ne fonctionne pas  

import { Http, Response } from "@angular/http";
import {UserService} from '../../Service/user.service'


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],
  providers: [UserService]
})
export class ConnexionComponent implements OnInit {

   userService = new UserService();

   

   nom: string;
   mdp: string;

   role = "guest";

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {

  }


  onClick(){

    //this.role = this.userService.getUserByName(this.nom);
    

    //this._sharedService.emitChange(this.role);

    console.log(this.userService.getUserByName(this.nom))
}

}

