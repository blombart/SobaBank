import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import {User} from '../modeles/user';
import {Users} from '../modeles/user';

import { Http, Response, URLSearchParams } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class UserService {

  private apiUrl = "http://localhost:8080/sobabank/";
  


  users = Users;

  constructor(private http: Http) {
   
   }


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


getUserByName(name: string): Observable<User>{
  /*for (let user of this.users) {
     if (user.nom == name){
            console.log(user.email);*/

            return this.http.get(this.apiUrl +"users/findname/" + name)
      .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }

  authenticateUser(nom, pwd): Observable<User>{
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', nom);
    urlSearchParams.append('pwd', pwd);
    return this.http.post(this.apiUrl + "users/auth", urlSearchParams)
    .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


affecterDemande(idAgent, idDemande): Observable<boolean> {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('idAgent', idAgent);
    urlSearchParams.append('idDemande', idDemande);
    console.log("methode affectation");
    return this.http.post(this.apiUrl + "affecte", urlSearchParams)
    .map((res: Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    
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

