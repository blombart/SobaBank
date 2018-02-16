import { Component, OnInit } from '@angular/core';
import {User} from '../../modeles/user';
import {Client} from '../../modeles/client';
import { AgentService} from '../../Service/agent.service';
import { Observable} from 'rxjs/Observable';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-forminscrition',
  templateUrl: './forminscrition.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css']
})
export class ForminscritionComponent implements OnInit {
  idClient: number;
  client: Client;
  userForm: FormGroup;
  

  constructor(private _fb: FormBuilder,private agentService: AgentService ) {
   }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.userForm = this._fb.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      prenom: ['', Validators.required],
      email: ['',Validators.required],
      adresse: ['',Validators.required],
      numTel: ['',Validators.required],
      nbEnfants: ['',Validators.required],
      situationMatrimonial: ['',Validators.required]
      
    });
  }

  onSubmit(){
    console.log("dans onsubmit forminscrition nom" + this.userForm.controls['nom'].value);
    //On cree un nouvel utilisateur
   this.client = new Client(0,
     this.userForm.controls['nom'].value,
     this.userForm.controls['prenom'].value,
     this.userForm.controls['email'].value,
     null,
     null,
     this.userForm.controls['adresse'].value,
     this.userForm.controls['numTel'].value,
     this.userForm.controls['nbEnfants'].value,
     this.userForm.controls['situationMatrimonial'].value,
     null,
     null,
     null,
     null,
     false
     
     )

   this.agentService.createClient(this.client).subscribe(
     id => {
       this.idClient = id;
       this.agentService.createDemande(this.idClient).subscribe(
     id => {
       console.log("Demande créée");
     },
           err => {
        console.log(err);
      }
      );

     },
           err => {
        console.log(err);
      }
      );


  }
  

}
