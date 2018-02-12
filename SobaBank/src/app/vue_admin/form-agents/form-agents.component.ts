import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup, FormControl} from '@angular/forms';

import { Agent } from '../../modeles/agent';

import { ActivatedRoute, Router } from '@angular/router';

import { AgentService} from '../../Service/agent.service';
import { DemandeOuvertureCompte} from '../../modeles/demandeOuvertureCompte';
import { Demande } from '../../modeles/demandes';

@Component({
  selector: 'app-form-agents',
  templateUrl: './form-agents.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css','./form-agents.component.css']
})
export class FormAgentsComponent implements OnInit {


  //Creation d'un agent null pour pouvoir afficher un formulaire vide
	 a1 : Agent ;

  id: number;


  //liste des demandes
  demandes: Demande[];
  afficheDemande: boolean = false;

  nouvelAgent: Agent;
  agentForm: FormGroup;

  constructor(private _fb: FormBuilder, private route: ActivatedRoute, private service: AgentService, private router: Router) {


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


//On recupere l'id passer en parametre de l'url, si id !=0 on va appeler la page de l'agent en question

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    if(this.id != 0){
  }



  onSubmit(){

    //On verifie que le formulaire est valide
    if(this.agentForm.valid){
      //Si on creer un agent on part dans cette condition
      if(this.newAgent()){
      //on recupere le max des id via la methode
    let id = this.service.getMaxId() +1;
      //on cree le nouvel agent qu'on ajoute dans le tableau et on retourne sur la page d'accueil
     this.nouvelAgent = new Agent(id,

       this.a1.nom,
       this.a1.prenom,
       this.a1.email,
       this.a1.mdp,
       "agent",
       this.a1.matricule,
       new Date(),
       this.a1.numTel,
       []
       ,[]);
     this.service.addAgent(this.nouvelAgent);

   } 
   // si c'est en edition on part dans cette condition
   else {
     this.doSomething();
   }

     this.router.navigate(["./admin"]);}
     

  }

//GETTER POUR LES FORMCONTROL
  get nom(){ return this.agentForm.get('nom');}
  get prenom(){ return this.agentForm.get('prenom');}
  get email(){ return this.agentForm.get('email');}
  get mdp(){ return this.agentForm.get('mdp');}
  get matricule(){ return this.agentForm.get('matricule');}
  get numTel(){ return this.agentForm.get('numTel')};


  //Methode pour afficher soit le bouton d'ajout soit le bouton d'edition
  newAgent(){
    if(this.id ==0){
      return true;
    }
  }

  doSomething(){
    console.log("edition agent");
  }


  afficherDemande(){
    this.afficheDemande = true;
  }

}


