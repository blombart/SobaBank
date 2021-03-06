 import {User} from './user';
import {Client} from './client';
import {DemandeOuvertureCompte} from './demandeOuvertureCompte';

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

	public clients: Client[],
	public demandesOuverture: DemandeOuvertureCompte[])
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
		[],
		[]
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
		[null],
		[]
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
		[],
		[]
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
		[],
		[]
		),


]

