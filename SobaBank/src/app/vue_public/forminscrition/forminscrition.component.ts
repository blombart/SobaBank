import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {FicheInfo} from '../../modeles/ficheInfo';
import {fichesInfos} from '../../modeles/ficheInfo'
import {FicheInfoService} from '../../Service/ficheInfo.service'


@Component({
  selector: 'app-forminscrition',
  templateUrl: './forminscrition.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css']
})
export class ForminscritionComponent implements OnInit {

  utilisateur: User;

  //allFiches = fichesInfos;

  fiche = new FicheInfo("","","","");

  ficheService =  new FicheInfoService();



  constructor() {
      this.utilisateur = new User("Hadjaz", "Abderrahmane", "moui@test.com", "0626865421")

   }

  ngOnInit() {

this.utilisateur = new User("Hadjaz", "Abderrahmane", "moui@test.com", "0626865421")

  }

  ngOnSubmit(){
    console.log("L'utilisateur est" + this.utilisateur.nom+" " + this.utilisateur.prenom)


    this.fiche.nom = this.utilisateur.nom;
    this.fiche.prenom = this.utilisateur.prenom;
    this.fiche.email = this.utilisateur.email;
    this.fiche.numTel = this.utilisateur.numTel;

    this.ficheService.addFicheInfo(this.fiche);

    console.log("Nom fiche info : " + this.fiche.nom);


  }

}