import {Demande, Status} from './demandes';
import {Agent} from './agent';
import {FicheInfo} from './ficheInfo';


export class DemandeOuvertureCompte extends Demande{
	constructor(public dateDemande: Date,
		public libelle: String,
		public estAffecte: boolean,
		public status: Status,
		public estValide: boolean,
		public agent: Agent,
		public dateAffectation: Date,
		public ficheInfo: FicheInfo
		){
		super(dateDemande,libelle,estAffecte,status,estValide,agent)
	}
}

export const demandesOuverture: DemandeOuvertureCompte[] = [
	new DemandeOuvertureCompte(new Date(),
		"ouverture compte",
		false,
		null,
		false,
		null,
		null,
		null
		),
	new DemandeOuvertureCompte(new Date(),
		"ouverture compte",
		false,
		null,
		false,
		null,
		null,
		null
		),
	new DemandeOuvertureCompte(new Date(),
		"ouverture compte",
		false,
		null,
		false,
		null,
		null,
		null
		),
	new DemandeOuvertureCompte(new Date(),
		"ouverture compte",
		false,
		null,
		false,
		null,
		null,
		null
		)
]

