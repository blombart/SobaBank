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
	comptes: Compte[],
	)
	{
		super(id,nom,prenom,email,mdp,role)
	}
}

//TODO creer plusieurs clients

export const clients: Client[] = [
/*new Client(1,
	"omar",
	"ramo",
	"foo@foo.fr",
	"azerty",
	"client",
	"01 rue de la liberté",
	"0132659515",
	3,
	"marié",
	//TODO instancier l'agent et le compte
	new Agent(),
	[new Compte(),
		new Compte()
		]
		),
*/
]