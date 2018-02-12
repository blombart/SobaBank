import {Demande, Status} from './demandes';
import {Agent} from './agent';

import {Client} from './client'

import { User } from './user';

export class DemandeOuvertureCompte{
	constructor(public id: number,
		public dateDemande: Date,
		public libelle: string,
		public estAffecte: boolean,
		public status: string,
		public estValide: boolean,
		public agent: Agent,
		public dateAffectation: Date,
		public client: Client
		){
	}
}

export const demandesOuverture: DemandeOuvertureCompte[] = [

	new DemandeOuvertureCompte(1,new Date(),
		"ouverture compte",
		false,
		null,
		false,
		null,
		null,
		null
		),

	new DemandeOuvertureCompte(2,new Date(),
    "ouverture compte",
		false,
		null,
		false,
		null,
		null,
		null
		),

	new DemandeOuvertureCompte(3,new Date(),
		"ouverture compte",
		false,
		null,
		false,
		null,
		null,
		null
		),

	new DemandeOuvertureCompte(4,new Date(),
		"ouverture compte",
		false,
		null,
		false,
		null,
		null,
		null
		)
]
