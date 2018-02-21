import { Component, OnInit } from '@angular/core';
import { AdminService} from '../../Service/admin.service';
import { Observable} from 'rxjs/Observable';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';

@Component({
  selector: 'app-forminscrition',
  templateUrl: './forminscrition.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css']
})
export class ForminscritionComponent implements OnInit {

  userForm: FormGroup;
  

  constructor(private _fb: FormBuilder,private adminService: AdminService,private _router: Router ) {
   }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.userForm = this._fb.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      prenom: ['', Validators.required],
      email: ['',Validators.required],
      adresse: ['',Validators.required],
      numTel: ['',Validators.required],
      nbEnfants: ['',Validators.required],
      situationMatrimonial: ['',Validators.required]
      
    });
  }

  onSubmit(){
   this.adminService.inscription(this.userForm.controls['nom'].value,
     this.userForm.controls['prenom'].value,
     this.userForm.controls['email'].value,
     this.userForm.controls['adresse'].value,
     this.userForm.controls['numTel'].value,
      this.userForm.controls['nbEnfants'].value,
      this.userForm.controls['situationMatrimonial'].value).subscribe(
      bool => {console.log(bool) ;
         this._router.navigate(["./finance"]);
      },
           err => {
        console.log(err);
      }
      );

  }
  

}
