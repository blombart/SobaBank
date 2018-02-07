import {User} from './user';
import {Agent} from './agent';
import {Compte} from './compte';

export class Client extends User{
	constructor(
	id: number,
	nom: string,
	prenom: string,
	email: string,
	mdp: string,
	role: string,
	adresse: string,
	numTel: string,
	nbEnfants: number,
	situationMatrimonial:string,

	agent: Agent,
	comptes: Compte[]
	)
	{
		super(id,nom,prenom,email,mdp,role)
	}
}

//TODO creer plusieurs clients

export const clients: Client[] = [
	new Client(2,
		"dupont",
		"hervé",
		"dupont.hervé@sobabank.com",
		"azerty",
		"client",
		"rue de la liberté 59000 LILLE",
		"0321546589",
		2,
		"marié",
		 null, 
		[null]
		
,)]