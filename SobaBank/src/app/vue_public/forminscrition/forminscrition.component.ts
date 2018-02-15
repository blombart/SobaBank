import { Component, OnInit } from '@angular/core';
import {User} from '../../modeles/user';
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
  demande: DemandeOuvertureCompte;

  constructor(private _fb: FormBuilder) {
   }

  ngOnInit() {
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
   this.utilisateur = new User(5,
     this.userForm.controls['nom'].value,
     this.userForm.controls['prenom'].value,
     this.userForm.controls['mail'].value,
     this.userForm.controls['numTel'].value,""
     )

  }
  

}