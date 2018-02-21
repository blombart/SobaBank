import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../Service/shared-service'; //Ne pas mettre dans les providers sinon ne fonctionne pas  
import { FormBuilder,Validators, FormGroup, FormControl} from '@angular/forms';
import { Http, Response } from "@angular/http";
import {UserService} from '../../Service/user.service';
import { CookieService} from 'angular2-cookie/core';
import {User} from '../../modeles/user';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css'],
  providers: [UserService]
})
export class ConnexionComponent implements OnInit {

  user: User;
  userForm: FormGroup;
  role = "guest";
  idUser : number;

  constructor(private _fb: FormBuilder,private _sharedService: SharedService, private userService: UserService, private cookieService: CookieService) { }

  ngOnInit() {
    this.userForm = this._fb.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      mdp: ['', Validators.required]
    });
  }


  onSubmit(){
   this.userService.authenticateUser(this.userForm.controls['nom'].value, this.userForm.controls['mdp'].value).subscribe(
              user => {this.user = user; 
                       console.log(user);
               this.role = user.role;
               this.idUser = user.id;
               this._sharedService.emitChange(this.role);
               this.cookieService.put("id", this.idUser.toString());
    });

}

}





