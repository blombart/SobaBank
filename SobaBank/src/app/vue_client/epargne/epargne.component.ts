import { Component, OnInit } from '@angular/core';
import {epargnes} from '../../modeles/compte';
import { CompteEpargne} from '../../modeles/compte';
import { CompteService} from '../../Service/compte.service';

@Component({
  selector: 'app-epargne',
  templateUrl: './epargne.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],
  providers:[CompteService]
})
export class EpargneComponent implements OnInit {

  
    epargnes:CompteEpargne=epargnes;

  constructor(private compteService:CompteService) { }

  ngOnInit() {
  
   this.epargnes=this.compteService.getAllComptesEpargne();

}
}