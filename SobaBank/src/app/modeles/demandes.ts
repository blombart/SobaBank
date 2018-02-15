import {Agent} from './agent';
import {Client} from './client';
import {Compte} from './compte';

export class Demande{
	constructor(public id: number,
		public dateDemande: Date,
		public libelle: string,
		public status: string,
		public estValide: boolean,
		){}
}


export class DemandeChequier extends Demande{
	constructor(public id: number,
		public dateDemande: Date,
		public libelle: string,
		public status: string,
		public estValide: boolean){
		super(id,dateDemande,libelle,status,estValide)
	}

}

export class DemandeModificationMdp extends Demande{
	constructor(public id: number,
		public dateDemande: Date,
		public libelle: string,
		public status: string,
		public estValide: boolean){
		super(id,dateDemande,libelle,status,estValide)
	}
}

export class DemandeNouveauCompte extends Demande{
	constructor(public id: number,
		public dateDemande: Date,
		public libelle: string,
		public status: string,
		public estValide: boolean,
		public newCompte : Compte){
		super(id,dateDemande,libelle,status,estValide)
	}
}



