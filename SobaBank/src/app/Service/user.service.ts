import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import {User} from '../modeles/user';
import {Users} from '../modeles/user';

import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class UserService {

  private apiUrl = "http://localhost:8080/sobabank/admin/";
private http: Http;
  users = Users;

  constructor() { }


  findAll(): Observable<User[]> {
    return this.http.get(this.apiUrl + "users")
      .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getUser(id) {
    return this.users[id-1];
  }

    getUsers(): Observable<User[]>{
      return of(Users);
    }


getUserByName(name: String){
  for (let user of this.users) {
     if (user.nom == name){
            console.log(user.email);

            return user.role;
     }
}

}


addUser(user: User){
  this.users.push(user);
}

removeUserByName(user: User){
  for (let user of this.users) {
     if (user.nom == name){
             
             //TODO supprimer du tableau
            
            return "Utilisateur supprimé";
     }
}

}


}

