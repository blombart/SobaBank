import { Component, OnInit } from '@angular/core';
import {SharedService} from '../service/shared-service'


@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['../bootstrap/css/bootstrap.css']
})
export class DeconnexionComponent implements OnInit {

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
this._sharedService.emitChange("guest");

  }

}
