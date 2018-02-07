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
		status: Status,
		estValide: boolean,
		agent: Agent,
		client: Client){
		super(dateDemande,libelle,estAffecte,status,estValide,agent)
	}
}


export class DemandeChequier extends DemandeClient{
constructor(dateDemande: Date,
		libelle: String,
		estAffecte: boolean,
		status: Status,
		estValide: boolean,
		agent: Agent,
		client: Client,
		mdp: String)
	{
		super(dateDemande,libelle,estAffecte,status,estValide,agent,client)
	}
}

export const demandeChequier: DemandeChequier[] = [
	new DemandeChequier(new Date(),
		"MDP",
		false,
		null,
		false,
		null,
		null,
		null
		)

]

export class DemandeModificationMdp extends DemandeClient{
	constructor(dateDemande: Date,
		libelle: String,
		estAffecte: boolean,
		status: Status,
		estValide: boolean,
		agent: Agent,
		client: Client,
		mdp: String)
	{
		super(dateDemande,libelle,estAffecte,status,estValide,agent,client)
	}
}
	export const demandeModificationMdp: DemandeModificationMdp[] = [
	new DemandeModificationMdp(new Date(),
		"demande chequier",
		false,
		null,
		false,
		null,
		null,
		null
		)

]

	export enum Status {EN_COURS, TRAITEE};


