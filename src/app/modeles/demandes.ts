import {Agent} from './agent';
import {Client} from './client';

export class Demande{
	constructor(public id: number,
		public dateDemande: Date,
		public libelle: string,
		public estAffecte: boolean,
		public status: string,
		public estValide: boolean,
		public agent: Agent
		){}
}

export class DemandeClient extends Demande{
	constructor(public id: number,
		public dateDemande: Date,
		public libelle: string,
		public estAffecte: boolean,
		public status: string,
		public estValide: boolean,
		public agent: Agent,
		public client: Client){
		super(id,dateDemande,libelle,estAffecte,status,estValide,agent)
	}
}

export class DemandeChequier extends DemandeClient{

}

export class DemandeModificationMdp extends DemandeClient{

}

export enum Status {EN_COURS, TRAITEE, NON_TRAITEE};

