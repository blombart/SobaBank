
import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Validators, FormControl, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
	formRecherche : FormGroup
	submitted: boolean;

  searchText: String;
  @Output() stringChange = new EventEmitter();


  constructor() {
  	
  }

  ngOnInit() {
  	this.formRecherche = new FormGroup({
		'recherche' : new FormControl('',[Validators.required])

  	});
  	this.submitted= false;
  }

  onSubmit(){

    this.stringChange.emit({value: this.formRecherche.get('recherche').value})
  }



  }

