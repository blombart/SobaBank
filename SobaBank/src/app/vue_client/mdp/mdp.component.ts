import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { demandeModificationMdp} from '../../modeles/demandes';
import { DemandeModificationMdp} from '../../modeles/demandes';
import { DemandeService} from '../../Service/demande.service';



@Component({
  selector: 'app-mdp',
  templateUrl: './mdp.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],
  providers: [DemandeService]
})
export class MdpComponent implements OnInit {

	//demandes :  Observable<DemandeModificationMdp[]>;
private demandeService: DemandeService
demandes: DemandeModificationMdp
  constructor() {
   }
//private demandeService: DemandeService
  ngOnInit() {
  	
  }

onClick(){
	this.demandes= this.demandeService.getDemandeModificationMdp();
  console.log(this.demandes);
  }
}