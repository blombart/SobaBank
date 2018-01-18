import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup, FormControl} from '@angular/forms';
import { Agent } from '../test_class/agent';

@Component({
  selector: 'app-form-agents',
  templateUrl: './form-agents.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css']
})
export class FormAgentsComponent implements OnInit {
	clients : String[] = ["cli1","cli2"];
	a1 = new Agent("ben","lom","a1@a1","pwd","1254",this.clients);

  constructor() {}

  ngOnInit() {
  }

  submitted = false;
  onSubmit(){
  	this.submitted = true;
  	console.log("submit");
  }


  newAgent(){
  	this.a1 = new Agent("toto",'','','','',this.clients);
  }
}
