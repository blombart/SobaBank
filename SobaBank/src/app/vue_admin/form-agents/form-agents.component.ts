import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup, FormControl} from '@angular/forms';
import { Agent } from '../test_class/agent';
import { ActivatedRoute } from '@angular/router';
import { AgentService} from '../test_class/agent.service';
@Component({
  selector: 'app-form-agents',
  templateUrl: './form-agents.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css']
})
export class FormAgentsComponent implements OnInit {
  //TEST EN DUR AVEC UN AGENT
	 // clients : String[] = ["cli1","cli2"];
  //  demandes : String[] = ["dem1","dem2"];
	 a1 = new Agent(null,"","","","","",null,null);
  id: number;

  agentForm: FormGroup;

  constructor(private _fb: FormBuilder, private route: ActivatedRoute, private service: AgentService) {

//Appelle de la méthode pour creer le formulaire
  this.createForm();

  }

  createForm(){
    this.agentForm = this._fb.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      prenom: ['', Validators.required],
      email: ['',Validators.required],
      mdp: ['', Validators.required],
      mat: ['', Validators.required]
    });
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.a1 = this.service.getAgent(this.id);
  }

  onSubmit(){
//TODO Ajouter une méthode pour creer le nouvel agent du form
  }

//GETTER POUR LES FORMCONTROL
  get nom(){ return this.agentForm.get('nom');}
  get prenom(){ return this.agentForm.get('prenom');}
  get email(){ return this.agentForm.get('email');}
  get mdp(){ return this.agentForm.get('mdp');}
  get mat(){ return this.agentForm.get('mat');}

  setAgent(){
   //  //TODO modifier les valeurs de l'agents
  	// this.a1 = new Agent("toto",'','','','',this.clients,this.demandes);
  }
}
