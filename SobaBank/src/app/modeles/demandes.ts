import {Agent} from './agent';
import {Client} from './client';

export class Demande{
	constructor(public id: number,
		public dateDemande: Date,
		public libelle: string,
		public estAffecte: boolean,
		public status: string,
		public estValide: boolean,
		){}
}


export class DemandeChequier extends Demande{
	constructor(public id: number,
		public dateDemande: Date,
		public libelle: string,
		public estAffecte: boolean,
		public status: string,
		public estValide: boolean,
		public agent: Agent,
		public client: Client){
		super(id,dateDemande,libelle,estAffecte,status,estValide)
	}

}

export class DemandeModificationMdp extends Demande{
	constructor(public id: number,
		public dateDemande: Date,
		public libelle: string,
		public estAffecte: boolean,
		public status: string,
		public estValide: boolean,
		public agent: Agent,
		public client: Client){
		super(id,dateDemande,libelle,estAffecte,status,estValide)
	}

}

	export const demandeModificationMdp: DemandeModificationMdp[] = [
	new DemandeModificationMdp(1,new Date(),
		"demande chequier",
		false,
		null,
		false,
		null,
		null
		)

]