import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Operation} from './operation';
import { Compte} from '../../modeles/compte';
import { Epargne} from '../epargne/epargne';
import { CompteService} from '../../Service/compte.service';
=======
import {Operation} from './operation';
import {Compte} from './compte';
import {Epargne} from '../epargne/epargne';
>>>>>>> bfc8bbdec0ec2e427685286afe1ab2af28a87e2f


@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],
  providers: [CompteService]
})
export class ComptesComponent implements OnInit {

<<<<<<< HEAD
	private compteService = new CompteService();

    comptes: Compte[];

    epargnes = [new Epargne(1,10000)];
=======
comptes = [new Compte(500.00,1) ,   new Compte(750.00,2)];

epargnes = [new Epargne(1,10000)];
>>>>>>> bfc8bbdec0ec2e427685286afe1ab2af28a87e2f

  constructor() { }

  ngOnInit() {

   this.comptes = this.compteService.getAllComptes();


  }
}