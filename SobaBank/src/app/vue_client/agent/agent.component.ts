  import { Component, OnInit} from '@angular/core';
import { Agent} from '../../modeles/agent';
import { ClientService} from '../../Service/client.service';
import { Observable } from 'rxjs/Observable';
import { FormBuilder,Validators, FormGroup, FormControl} from '@angular/forms';
import { CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],
  providers: [ClientService]
})
export class AgentComponent implements OnInit {

  compteForm: FormGroup;
  id:number;

  constructor(private clientService : ClientService,private _fb: FormBuilder, private cookieService: CookieService){}

  ngOnInit() {
     this.id = Number(this.cookieService.get("id"));
    this.createForm();
}

createForm(){
    this.compteForm = this._fb.group({
      solde: ['', [Validators.required]],
      compteSelected: ['']
    });
  }

onSubmit(){
  let type: string = this.compteForm.controls['compteSelected'].value;
  let solde : number = this.compteForm.controls['solde'].value;
  this.clientService.createDemandeNouveauCompte(this.id,type,solde).subscribe(
    dem => {
      console.log("demande creer");
    })
}


}