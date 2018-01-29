import {Agent} from './agent';
import {Client} from './client';

export class Demande{
	constructor(dateDemande: Date,
		libelle: String,
		estAffecte: boolean,
		status: Status,
		estValide: boolean,
		agent: Agent
		){}
}

export class DemandeClient extends Demande{
	constructor(dateDemande: Date,
		libelle: String,
		estAffecte: boolean,
		status: String,
		estValide: boolean,
		agent: Agent,
		client: Client){
		super(dateDemande,libelle,estAffecte,status,estValide,agent)
	}
}

export class DemandeChequier extends DemandeClient{

}

export class DemandeModificationMdp extends DemandeClient{

}

export enum Status {EN_COURS, TRAITEE};

