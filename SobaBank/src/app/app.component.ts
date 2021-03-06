import { Component, OnInit, Input, Directive} from '@angular/core';
import {User} from './modeles/user';
import {NavbarComponent} from './vue_public/navbar/navbar.component';
import {SharedService}  from './Service/shared-service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./bootstrap/css/bootstrap.css']

})

export class AppComponent  implements OnInit{
    title = 'SOBA Bank';

    //@Input()
    //utilisateur = new User("Abder", "Hadjaz","moi@gog.com","0554123211", "guest");
    role: "guest";

constructor(private _sharedService: SharedService){
//this.utilisateur = new User("Abder", "Hadjaz","moi@gog.com","0554123211", "client");


 _sharedService.changeEmitted$.subscribe(
        text => {
            console.log(text);
            this.role = text;
            this.ngOnInit();
        });
this.role= "guest"

}





ngOnInit(){
  
}
}
