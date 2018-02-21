import { Component, OnInit } from '@angular/core';
import { Notification } from '../../modeles/notification';
import{ClientService} from '../../Service/client.service';
import { Compte} from '../../modeles/compte';
import { Client } from '../../modeles/client';
import{NotificationService} from '../../Service/notification.service';
import { CompteEpargne} from '../../modeles/compte';
import { CookieService} from 'angular2-cookie/core';


@Component({
  selector: 'app-client-accueil',
  templateUrl: './client-accueil.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],
  providers:[ClientService]

})


export class ClientAccueilComponent implements OnInit {
	


     comptes: Compte[];
    epargnes:CompteEpargne[];
    id: number

   


  constructor(private clientService: ClientService, private cookieService: CookieService) { }
//private notificationService: NotificationService
  ngOnInit() {
    this.id = Number(this.cookieService.get("id"));

  this.getAllComptes();

   //this.getNotifications();

//this.notifications=this.notificationService.getUnreadNotificationsCount();
this.getAllComptesEpargne();
}

getAllComptes(){
  this.clientService.getAllComptes(this.id).subscribe(
    cptes => {
      this.comptes=cptes;
    },
    err => {
      console.log(err);
    }
);
}
  /*getNotifications(){
  this.notificationService.getUnreadNotifications().suscribe(
    notif => {
      this.notifications=notif;
    },
    err => {
      console.log(err);
    }
);*/

  getAllComptesEpargne(){
  this.clientService.getAllComptesEpargne(this.id).subscribe(
    epgnes => {
      this.epargnes=epgnes;
    },
    err => {
      console.log(err);
    }
    );
  }

}

