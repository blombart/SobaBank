import {User} from './user';
import {Client} from './client';
import {Demande} from './demandes';

export class Agent extends User{
constructor(
	id: number,
	nom: String,
	prenom: String,
	email: String,
	mdp: String,
	role: String,
	matricule: String,
	dateDebutContrat: Date,
	numTel: String,
	clients: Client[],
	demandes: Demande[])
{
		super(id,nom,prenom,email,mdp,role)
	}
}

//TODO creer plusieurs agents
export const agents : Agent[] = []