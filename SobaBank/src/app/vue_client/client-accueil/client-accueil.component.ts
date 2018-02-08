import { Component, OnInit } from '@angular/core';
import { Notification } from '../../modeles/notification';
import { notifications } from '../../modeles/notification';
import{ClientService} from '../../Service/client.service';
import { comptes} from '../../modeles/compte';
import { Compte} from '../../modeles/compte';
import { Client } from '../../modeles/client';
import { clients } from '../../modeles/client';
import { CompteService} from '../../Service/compte.service';

@Component({
  selector: 'app-client-accueil',
  templateUrl: './client-accueil.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],
  providers:[CompteService]

})


export class ClientAccueilComponent implements OnInit {
	

   private compteService = new CompteService();


    comptes: Compte= comptes;
    
   client : Client[];

  constructor() { }

  ngOnInit() {


   this.comptes= this.compteService.getAllComptes();

  }

  getUnreadNotificationsCount() {
   return this.getUnreadNotifications().length;
  }
  
  getUnreadNotifications() : Notification[] {
      return this.client.notifications.filter(notif => !notif.isRead);
  }

}
