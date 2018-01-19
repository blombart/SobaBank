import { Component, OnInit, Input, Directive } from '@angular/core';
import {User} from './vue_public/forminscrition/user';
import {NavbarComponent} from './vue_public/navbar/navbar.component'
import {SharedService}  from './service/shared-service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./bootstrap/css/bootstrap.css'],

})

export class AppComponent  implements OnInit{
    title = 'SOBA Bank.';

    //@Input() 
    utilisateur = new User("Abder", "Hadjaz","moi@gog.com","0554123211", "guest");
     role="guest"

constructor(private _sharedService: SharedService){
//this.utilisateur = new User("Abder", "Hadjaz","moi@gog.com","0554123211", "client");


 _sharedService.changeEmitted$.subscribe(
        text => {
            console.log(text);
            this.role = text;
        });
//this.role= "guest"

}





ngOnInit(){
this.role= "guest"


}
}
