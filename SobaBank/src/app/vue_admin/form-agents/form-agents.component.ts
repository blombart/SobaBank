import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup, FormControl} from '@angular/forms';
import { Agent } from '../../modeles/agent';
import { ActivatedRoute } from '@angular/router';
import { AgentService} from '../../Service/agent.service';
@Component({
  selector: 'app-form-agents',
  templateUrl: './form-agents.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css']
})
export class FormAgentsComponent implements OnInit {
  //TEST EN DUR AVEC UN AGENT
	 // clients : String[] = ["cli1","cli2"];
  //  demandes : String[] = ["dem1","dem2"];
	 a1 = new Agent(null,"","","","","","",null,"",null,null);

  id: number;

  nouvelAgent: Agent;

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
      matricule: ['', Validators.required],
      numTel: ['',Validators.required]
    });
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    if(this.id != 0){
    this.a1 = this.service.getAgent(this.id)};
  }

  onSubmit(){
     this.nouvelAgent = new Agent(Agent.compteur,
       this.a1.nom,
       this.a1.prenom,
       this.a1.email,
       this.a1.mdp,
       "agent",
       this.a1.matricule,
       new Date(),
       this.a1.numTel,
       null
       ,null);
     this.service.addAgent(this.nouvelAgent);
     console.log("agent ajouté");
  }

//GETTER POUR LES FORMCONTROL
  get nom(){ return this.agentForm.get('nom');}
  get prenom(){ return this.agentForm.get('prenom');}
  get email(){ return this.agentForm.get('email');}
  get mdp(){ return this.agentForm.get('mdp');}
  get matricule(){ return this.agentForm.get('matricule');}
  get numTel(){ return this.agentForm.get('numTel')};
}


