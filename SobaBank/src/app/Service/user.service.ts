import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import {User} from '../modeles/user';
import {Users} from '../modeles/user';


@Injectable()
export class UserService {

  users = Users;
  constructor() { }

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