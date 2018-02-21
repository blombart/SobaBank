import { Component, OnInit } from '@angular/core';

import { CompteEpargne} from '../../modeles/compte';
import { ClientService} from '../../Service/client.service';

@Component({
  selector: 'app-epargne',
  templateUrl: './epargne.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],
  providers:[ClientService]
})
export class EpargneComponent implements OnInit {

  
    epargnes:CompteEpargne[];

  constructor(private clientService:ClientService) { }

  ngOnInit() {
  
   this.getAllComptesEpargne();

}


  getAllComptesEpargne(){
  this.clientService.getAllComptesEpargne(1).subscribe(
    epgnes => {
      this.epargnes=epgnes;
    },
    err => {
      console.log(err);
    }
    );
  
}
}