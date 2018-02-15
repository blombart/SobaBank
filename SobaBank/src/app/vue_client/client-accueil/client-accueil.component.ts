import { Component, OnInit } from '@angular/core';
import { Notification } from '../../modeles/notification';
import{ClientService} from '../../Service/client.service';
import { Compte} from '../../modeles/compte';
import { Client } from '../../modeles/client';
import{NotificationService} from '../../Service/notification.service';
import { CompteEpargne} from '../../modeles/compte';


@Component({
  selector: 'app-client-accueil',
  templateUrl: './client-accueil.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],
  providers:[ClientService]

})


export class ClientAccueilComponent implements OnInit {
	

   //private compteService = new CompteService();

//comptes :Compte; 
   //notifications:Notification[]=notifications;
    //notif = notifications;
     comptes: Compte[];
   
    epargnes:CompteEpargne[];
   //client :Client[];
   


  constructor(private clientService: ClientService) { }
//private notificationService: NotificationService
  ngOnInit() {
  this.getAllComptes();

   //this.getNotifications();

//this.notifications=this.notificationService.getUnreadNotificationsCount();
this.getAllComptesEpargne();
}

getAllComptes(){
  this.clientService.getAllComptes(1).subscribe(
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
  this.clientService.getAllComptesEpargne(1).subscribe(
    epgnes => {
      this.epargnes=epgnes;
    },
    err => {
      console.log(err);
    }
    );
  }

}

