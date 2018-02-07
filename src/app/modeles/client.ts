import {User} from './user';
import {Agent} from './agent';
import {Compte} from './compte';
import {agents} from './agent';
import {comptes} from './compte';
import {CompteEpargne} from './compte';
import {epargnes} from './compte';
import {Notification} from './notification';
import {notifications} from './notification';

export class Client extends User{
	
	id: number;
	nom: string;
	prenom: string;
	email: string;
	mdp: string;
	role: string;
	adresse: string;
	numTel: string;
	nbEnfants: number;
	situationMatrimonial:string;
	notifications : Notification[];
	agent: Agent[];
	comptes: Compte[];
	
	
}

//TODO creer plusieurs clients
export const clients: Client= {

    id: 12,
	nom: "omar",
	prenom: "omar",
	email: "omar",
	mdp: "omar",
	role: "omar",
	adresse: "omar",
	numTel: "omar",
	nbEnfants: 12,
	situationMatrimonial:"omar",
	notifications : notifications,
	agent: agents,
	comptes: comptes
	


}