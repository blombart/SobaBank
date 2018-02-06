import { Component, OnInit } from '@angular/core';
import { Notification } from '../../modeles/notification';
import { notifications } from '../../modeles/notification';


import { Client } from '../../modeles/client';
import { clients } from '../../modeles/client';

@Component({
  selector: 'app-client-accueil',
  templateUrl: './client-accueil.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],


})
export class ClientAccueilComponent implements OnInit {
	client : Client = clients;
  constructor() { }

  ngOnInit() {
  }

  getUnreadNotificationsCount() {
   return this.getUnreadNotifications().length;
  }
  
  getUnreadNotifications() : Notification[] {
      return this.client.notifications.filter(notif => !notif.isRead);
  }

}
