import { Component, OnInit } from '@angular/core';
import { Compte} from '../../modeles/compte';
import { ClientService} from '../../Service/client.service';
import { FormBuilder,Validators, FormGroup, FormControl} from '@angular/forms';
import { CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
 styleUrls: ['../../bootstrap/css/bootstrap.css'],
  providers: [ClientService]
})
export class VirementComponent implements OnInit {

  comptesCrediter: Compte[];
  comptesDebiter: Compte[];
  montant: number;
  libelle: string;
  compteDebitSelected: Compte;
  compteCreditSelected: Compte;
  virementForm: FormGroup;
  id:number;


  constructor(private clientService: ClientService,private _fb: FormBuilder, private cookieService: CookieService) { }

  ngOnInit() {
    this.id = Number(this.cookieService.get("id"));
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
  this.clientService.findAllComptes(this.id).subscribe(
    comptes =>{
      this.comptesCrediter = comptes; this.comptesDebiter = comptes;
    },
      err => {
        console.log(err);
      });
}

selectCompteDebite(_compteDebitSelected : Compte): void{
  console.log("id compte debit dans selectCOmptedebit :" + _compteDebitSelected.id);
  this.compteDebitSelected = _compteDebitSelected;
}

selectCompteCredite(_compteCreditSelected : Compte): void{
  console.log("id compte crebit dans selectCOmpteCredit :" + _compteCreditSelected.id);
  this.compteCreditSelected = _compteCreditSelected;
}

 onSubmit(){
   if(this.virementForm.valid){
     this.montant = this.virementForm.controls['montant'].value;
     this.libelle = this.virementForm.controls['libelle'].value;
     let idDebit: number = this.compteDebitSelected.id;
     let idCredit: number = this.compteCreditSelected.id;
     console.log("dans onsubmit iddebit: " + idDebit + " idcredit: " + idCredit);

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