import { Component, OnInit, Input, Directive } from '@angular/core';
import {User} from './vue_public/forminscrition/user';
import {NavbarComponent} from './vue_public/navbar/navbar.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./bootstrap/css/bootstrap.css'],

})

export class AppComponent  implements OnInit{
    title = 'SOBA Bank.';

    @Input() utilisateur: any; // = new User("Abder", "Hadjaz","moi@gog.com","0554123211", "client");
     //role="guest"

constructor(){
this.utilisateur = new User("Abder", "Hadjaz","moi@gog.com","0554123211", "guest");

//this.role= "guest"

}

ngOnInit(){
//this.role= "guest"
//this.utilisateur = new User("Abder", "Hadjaz","moi@gog.com","0554123211", "guest");

}
}
