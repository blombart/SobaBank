import { Component, OnInit } from '@angular/core';
import { Compte} from '../../modeles/compte';
import { ClientService} from '../../Service/client.service';
import { FormBuilder,Validators, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
 styleUrls: ['../../bootstrap/css/bootstrap.css']
})
export class VirementComponent implements OnInit {

	comptes: Compte[];
	montant: number;
	libelle: string;
  compteDebitSelected: Compte;
  compteCreditSelected: Compte;
  virementForm: FormGroup;


  constructor(private clientService: ClientService,private _fb: FormBuilder) { }

  ngOnInit() {
  	this.getAllComptes();
    this.createForm();
  }

  createForm(){
    this.virementForm = this._fb.group({
      montant: ['', [Validators.required, Validators.minLength(3)]],
      libelle: ['']
    });
  }

getAllComptes(){
	this.clientService.findAllComptes(1).subscribe(
    comptes =>{
      this.comptes = comptes;
    },
      err => {
        console.log(err);
      });
}

selectCompteDebite(_compteDebitSelected : Compte): void{
  this.compteDebitSelected = _compteDebitSelected;
}

selectCompteCredite(_compteCreditSelected : Compte): void{
  this.compteCreditSelected = _compteCreditSelected;
}

 onSubmit(){
   if(this.virementForm.valid){
     this.montant = this.virementForm.controls['montant'].value;
     this.libelle = this.virementForm.controls['libelle'].value;
     let idDebit: number = this.compteDebitSelected.id;
     let idCredit: number = this.compteCreditSelected.id;

     this.clientService.virementInterne(idDebit, idCredit, this.montant,this.libelle).subscribe(
      bool => {
        console.log(bool);
      },
      err => {
        console.log(err);
      });
   }
}
}
