import { Component, OnInit } from '@angular/core';
import { DemandeModificationMdp} from '../../modeles/demandes';
import { ClientService} from '../../Service/client.service';

import { Client} from '../../modeles/client';




@Component({
  selector: 'app-mdp',
  templateUrl: './mdp.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],
  providers: [ClientService]
})
export class MdpComponent implements OnInit {

	
  constructor(private clientService: ClientService) {
   }
//private demandeService: DemandeService
 ngOnInit() {
  }


  


  onClick(){
      this.clientService.createDemandeMdp(1).subscribe(
        reponse => {
          console.log("demande de mdp transmise");
        },
        err => {
      console.log(err);
    }
        )


  }
}