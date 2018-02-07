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
	
constructor(

	public id: number,
	public nom: string,
	public prenom: string,
	public email: string,
	public mdp: string,
	public role: string,
	public adresse: string,
	public numTel: string,
	public nbEnfants: number,
	public situationMatrimonial:string,

	public notifications : Notification[],
	public agent: Agent[],
	public comptes: Compte[])
	
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
	[],
	[],
	[]
	),

]
