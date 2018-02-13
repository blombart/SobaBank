import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import {Demande} from '../modeles/demandes';
import {demandeModificationMdp} from '../modeles/demandes';
import {DemandeModificationMdp} from '../modeles/demandes';

import {Compte} from '../modeles/compte';
import {comptes} from '../modeles/compte';

import {DemandeChequier} from '../modeles/demandes';
import {demandeChequier} from '../modeles/demandes';

import {Client} from '../modeles/client';
import {clients} from '../modeles/client';

import {Notification} from '../modeles/notification';
import {notifications} from '../modeles/notification';


@Injectable()
export class NotificationService {
  //operationService = new OperationService();


  notifications=notifications;
  //notif=notifications

	client : Client[]=clients;
constructor() { }


// 
// getUnreadNotificationsCount() {
   // return this.getUnreadNotifications().length;
  // }
  // 
  // getUnreadNotifications() : Notification[] {
      // return this.notifications.filter(notif => !notif.isRead);
  // }

   getUnreadNotifications() {
    return this.notifications;
}
}