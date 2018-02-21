import { Component, OnInit } from '@angular/core';
import { DemandeModificationMdp} from '../../modeles/demandes';
import { ClientService} from '../../Service/client.service';

import { Client} from '../../modeles/client';
import { CookieService} from 'angular2-cookie/core';



@Component({
  selector: 'app-mdp',
  templateUrl: './mdp.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],
  providers: [ClientService]
})
export class MdpComponent implements OnInit {

  id: number;
  constructor(private clientService: ClientService, private cookieService: CookieService) {
   }
//private demandeService: DemandeService
 ngOnInit() {
   this.id = Number(this.cookieService.get("id"));
  }


  


  onClick(){
      this.clientService.createDemandeMdp(this.id).subscribe(
        reponse => {
          console.log("demande de mdp transmise");
        },
        err => {
      console.log(err);
    }
        )


  }
}
