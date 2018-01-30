import {Demande, Status} from './demandes';
import {Agent} from './agent';
import {FicheInfo} from './ficheInfo';
export class DemandeOuvertureCompte extends Demande{
	constructor(dateDemande: Date,
		libelle: String,
		estAffecte: boolean,
		status: Status,
		estValide: boolean,
		agent: Agent,
		dateAffectation: Date,
		ficheInfo: FicheInfo
		){
		super(dateDemande,libelle,estAffecte,status,estValide,agent)
	}
}