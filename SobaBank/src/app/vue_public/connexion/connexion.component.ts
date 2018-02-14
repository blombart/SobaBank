import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../Service/shared-service'; //Ne pas mettre dans les providers sinon ne fonctionne pas  

import { Http, Response } from "@angular/http";
import {UserService} from '../../Service/user.service';
import {User} from '../../modeles/user';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],
  providers: [UserService]
})
export class ConnexionComponent implements OnInit {


   http: Http;
   

   user: User;

   nom: string;
   mdp: string;

   role = "guest";

  constructor(private _sharedService: SharedService, private userService: UserService) { }

  ngOnInit() {

  }


  onClick(){
        this.userService.getUserByName(this.nom).subscribe(
          user => {this.user = user; 
                   console.log(user)
           this.role = user.role;

           this._sharedService.emitChange(this.role);

                    });




}

}

