import {User} from './user';
import {Client} from './client';
import {Demande} from './demandes';

export class Agent extends User{

constructor(

	public id: number,
	public nom: string,
	public prenom: string,
	public email: string,
	public mdp: string,
	public role: string,
	public matricule: string,
	public dateDebutContrat: Date,
	public numTel: string,

	clients: Client[],
	demandes: Demande[])
{
		super(id,nom,prenom,email,mdp,role);

	}
}


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

