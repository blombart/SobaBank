import { Component, OnInit } from '@angular/core';
import { Notification } from '../../modeles/notification';
import { notifications } from '../../modeles/notification';
import{ClientService} from '../../Service/client.service';
import { comptes} from '../../modeles/compte';
import { Compte} from '../../modeles/compte';
import { Client } from '../../modeles/client';
import { clients } from '../../modeles/client';
import { CompteService} from '../../Service/compte.service';
import { Observable} from 'rxjs/Observable';
import{NotificationService} from '../../Service/notification.service';
import { epargnes} from '../../modeles/compte';
import { CompteEpargne} from '../../modeles/compte';


@Component({
  selector: 'app-client-accueil',
  templateUrl: './client-accueil.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],
  providers:[ClientService,CompteService, NotificationService]

})


export class ClientAccueilComponent implements OnInit {
	

   //private compteService = new CompteService();

//comptes :Compte; 
    notifications:Notification;
    //notif :Notification;
      comptes : Compte; 
   client :Client;
    epargnes:CompteEpargne=epargnes;


  constructor(private clientService: ClientService, private compteService:CompteService, private notificationService: NotificationService) { }

  ngOnInit() {


   this.comptes= this.compteService.getAllComptes();

   this.notifications=this.notificationService.getUnreadNotifications();

//this.notif=this.notificationService.getUnreadNotificationsCount();


   this.epargnes=this.compteService.getAllComptesEpargne();

  }

  
}
