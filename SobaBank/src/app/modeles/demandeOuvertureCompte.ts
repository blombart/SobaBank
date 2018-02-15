import {Demande} from './demandes';
import {Agent} from './agent';

import {Client} from './client'

import { User } from './user';

export class DemandeOuvertureCompte{
	constructor(public id: number,
		public dateDemande: Date,
		public estAffecte: boolean,
		public status: string,
		public estValide: boolean,
		public dateAffectation: Date,
		public client: Client,
		public agent: string,
		
		
		){
	}
}

export const demandesOuverture: DemandeOuvertureCompte[] = [

	new DemandeOuvertureCompte(1,new Date(),
		false,
		null,
		false,
		null,
		null,
		null
		),

	new DemandeOuvertureCompte(2,new Date(),
		false,
		null,
		false,
		null,
		null,
		null
		),

	new DemandeOuvertureCompte(3,new Date(),
		false,
		null,
		false,
		null,
		null,
		null
		),

	new DemandeOuvertureCompte(4,new Date(),
		false,
		null,
		false,
		null,
		null,
		null
		)
]
