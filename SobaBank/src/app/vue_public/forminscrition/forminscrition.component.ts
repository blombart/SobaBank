import { Component, OnInit } from '@angular/core';
import {User} from './user'
import { DemandeService} from '../../Service/demande.service';
import { Observable} from 'rxjs/Observable';
import {DemandeOuvertureCompte} from '../../modeles/demandeOuvertureCompte';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-forminscrition',
  templateUrl: './forminscrition.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css']
})
export class ForminscritionComponent implements OnInit {

  utilisateur: User;
  userForm: FormGroup;
  demande: demandeOuvertureCompte;

  constructor(private _fb: FormBuilder,private demandeService:DemandeService) {
   }

  ngOnInit() {
   
    this.demandesOuverture = this.demandeService.getDemandesOuverture();
    this.createForm();
  }

  createForm(){
    this.userForm = this._fb.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      prenom: ['', Validators.required],
      mail: ['',Validators.required],
      numTel: ['',Validators.required]
    });
  }

  onSubmit(){
    //On cree un nouvel utilisateur
   this.utilisateur = new User(
     this.userForm.controls['nom'].value,
     this.userForm.controls['prenom'].value,
     this.userForm.controls['mail'].value,
     this.userForm.controls['numTel'].value
     )

   this.demande = new DemandeOuvertureCompte(5,
     new Date(),
     "demande ouverture compte n°5",
     false,
     "Non traitée",
     false,
     null,
     null,
     this.utilisateur
     )
   this.demandeService.addDemandeOuverture(this.demande);
   console.log("demande enregistré");
  }
  

}