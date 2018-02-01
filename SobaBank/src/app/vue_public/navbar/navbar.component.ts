
import { Component, OnInit, Input, Output, Directive } from '@angular/core';
import {Item} from './item';
import {User} from '../forminscrition/user';
import {AppComponent} from '../../app.component';
import {SharedService}  from '../../service/shared-service';  //Ne pas mettre dans les providers sinon ne fonctionnera pas.


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css']
})
export class NavbarComponent implements OnInit {



    //@Input() role: any;
     role = "guest";

    /*role: String;*/
    items: Item[]




  constructor(private _sharedService: SharedService) {



  	    //Definir le type de navbar (guest, client, agent, admin)

       _sharedService.changeEmitted$.subscribe(
        text => {
            console.log(text);
            this.role = text;
            this.ngOnInit();
        });




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
	new Item(1, 'client','Espace client'),
     new Item(3, 'deconnexion', 'Se deconnecter')

];
    }



    if (this.role == "agent"){

//console.log("Entré ds condition ngInit");

         this.items  = [
	new Item(1, 'agent','Espace agent'),

  new Item(3, 'deconnexion', 'Se deconnecter')

];



}



if (this.role == "admin"){

//console.log("Entré ds condition ngInit");

         this.items  = [
	new Item(1, 'admin','Espace administrateur'),
  new Item(3, 'deconnexion', 'Se deconnecter')

];



}
}

}