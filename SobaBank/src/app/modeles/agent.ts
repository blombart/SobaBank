import {User} from './user';
import {Client} from './client';
import {Demande} from './demandes';

export class Agent extends User{
	static compteur : number = 0;

constructor(
	public id: number,
	public nom: String,
	public prenom: String,
	public email: String,
	public mdp: String,
	public role: String,
	public matricule: String,
	public dateDebutContrat: Date,
	public numTel: String,
	clients: Client[],
	demandes: Demande[])
{
		super(id,nom,prenom,email,mdp,role);
		Agent.compteur++;

	}
}

//TODO creer plusieurs agents
export const agents : Agent[] = [
	new Agent(1,
		"allon",
		"levy",
		"allon.levy@sobabank.com",
		"azerty",
		"agent",
		"A0001",
		new Date(),
		"0321546589",
		[null, null],
		[null,null]
		),
	new Agent(2,
		"bacard",
		"hugo",
		"bacard.hugo@sobabank.com",
		"qsdfgh",
		"agent",
		"A0002",
		new Date(),
		"0321651254",
		[null, null],
		[null,null]
		),
	new Agent(3,
		"baker",
		"matthew",
		"baker.matthew@sobabank.com",
		"wxcvbn",
		"agent",
		"A0003",
		new Date(),
		"0321659487",
		[null, null],
		[null,null]
		),
	new Agent(4,
		"balwe",
		"chetan",
		"balwe.chetan@sobabank.com",
		"poiuyt",
		"agent",
		"A0004",
		new Date(),
		"0321320121",
		[null, null],
		[null,null]
		),

]