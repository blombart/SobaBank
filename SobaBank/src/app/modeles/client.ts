import {User} from './user';
import {Agent} from './agent';
import {Demande} from './demandes'
import {Compte} from './compte';
import {agents} from './agent';
import {comptes} from './compte';
import {CompteEpargne} from './compte';
import {epargnes} from './compte';
import {Notification} from './notification';
import {notifications} from './notification';

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
	demandes: Demande[],
	files: File[],
	isClient: boolean
	)

	{
		super(id,nom,prenom,email,mdp,role);

	}
	
}

//TODO creer plusieurs clients

export const clients: Client[]= [

    new Client(1,
	"leg",
	"seb",
	"seb@xxx.fr",
	"coucou",
	"client",
	"rue lille 59000",
	"0611121314",
	2,
	"pacsé",
	null,
	[],
	[],
	[],
	true
	),

    new Client(2,
	"kick",
	"abde",
	"abde@xxx.fr",
	"kikoo",
	"client",
	"rue Arras 62000",
	"0612131415",
	0,
	"marié",
	null,
	[],
	[],
	[],
	true
	),
]
