import {Operation} from './operation';


export class Compte{

	constructor(public id: number,
		public numCompte: number,
		public dateCreation: Date,
		public solde: number,
		public rib: String,
		public decouvertAutorise: number,
		public tauxAgios: number,
		public operations: Operation[]
		){
	}
}

export class CompteEpargne extends Compte{
	constructor(public id:number,
		public numCompte: number,
		public dateCreation: Date,
		public solde: number,
		public rib: String,
		public decouvertAutorise: number,
		public tauxAgios: number,
		public operations: Operation[],
		public tauxInteret: number,
		public montantRemuneration: number){
		super(id,numCompte,dateCreation,solde,rib,decouvertAutorise,tauxAgios,operations)
	}
}


/*//TODO Creer plusieurs comptes
export const comptes : Compte[] = [
			{id:1,numCompte:1,dateCreation: new Date(),solde:506,rib:"sam",decouverteAutorise:20,tauxAgios:10,operations:{montant: 14,
		date: new Date(),
		libelle: "azer"}},
			{id:2,numCompte:2,dateCreation: new Date(),solde:506,rib:"sam",decouverteAutorise:20,tauxAgios:10,operations:{montant: 14,
		date: new Date(),
		libelle: "azer"}},
		{id:3,numCompte:3,dateCreation: new Date(),solde:506,rib:"sam",decouverteAutorise:20,tauxAgios:10,operations:{montant: 14,
		date: new Date(),
		libelle: "azer"}},
		{id:4,numCompte:4,dateCreation: new Date(),solde:506,rib:"sam",decouverteAutorise:20,tauxAgios:10,operations:{montant: 14,
		date: new Date(),
		libelle: "azer"}}

			]


//TODO Creer plusieurs comptes
export const epargnes : CompteEpargne[] = [
			{id:1,numCompte:1,dateCreation: new Date(),solde:506,rib:"sam",decouverteAutorise:20,tauxAgios:10,operations:{montant: 14,
		date: new Date(),libelle: "azer"},tauxInteret:12,montantRemuneration:10},
			
			{id:2,numCompte:2,dateCreation: new Date(),solde:400,rib:"sam",decouverteAutorise:20,tauxAgios:10,operations:{montant: 14,
		date: new Date(),libelle: "azer"},tauxInteret:12,montantRemuneration:10},


			{id:3,numCompte:3,dateCreation: new Date(),solde:652,rib:"sam",decouverteAutorise:20,tauxAgios:10,operations:{montant: 14,
		date: new Date(),libelle: "azer"},tauxInteret:12,montantRemuneration:10},


			{id:4,numCompte:4,dateCreation: new Date(),solde:506,rib:"sam",decouverteAutorise:20,tauxAgios:10,operations:{montant: 14,
		date: new Date(),libelle: "azer"},tauxInteret:12,montantRemuneration:10}
		


			]*/
