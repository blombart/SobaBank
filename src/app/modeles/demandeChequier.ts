import {Demande, Status} from './demandes';
import {Agent} from './agent';
import {Client} from './client';
import { User } from './user';


export class DemandeChequier {
	constructor(public id: number,
		public dateDemande: Date,
		public libelle: string,
		public estAffecte: boolean,
		public status: string,
		public estValide: boolean,
		public agent: Agent,
		public client: Client)
	{
	}

}


export const demandeChequier: DemandeChequier[] = [

	new DemandeChequier(1,new Date(),
		"demande de chéquier",
		false,
		null,
		false,
		null,
		null
		),

	new DemandeChequier(2,new Date(),
    	"demande de chéquier",
		false,
		null,
		false,
		null,
		null
		),

	new DemandeChequier(3,new Date(),
		"demande de chéquier",
		false,
		null,
		false,
		null,
		null
		),

	new DemandeChequier(4,new Date(),
		"demande de chéquier",
		false,
		null,
		false,
		null,
		null
		)
]
