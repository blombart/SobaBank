import {Operation} from './operation';


export class Compte{



	constructor(
		numCompte: number,
		dateCreation: Date,
		solde: number,
		rib: String,
		decouvertAutorise: number,
		tauxAgios: number,
		operations: Operation[]
		){
	}
}

export class CompteEpargne extends Compte{
	constructor(numCompte: number,
		dateCreation: Date,
		solde: number,
		rib: String,
		decouvertAutorise: number,
		tauxAgios: number,
		operations: Operation[],
		tauxInteret: number,
		montantRemuneration: number){
		super(numCompte,dateCreation,solde,rib,decouvertAutorise,tauxAgios,operations)
	}
}


//TODO Creer plusieurs comptes
export const compte : Compte[] = [
			{numCompte:1,dateCreation: new Date(),solde:506,rib:"sam",decouverteAutorise:20,tauxAgios:10,operations:{montant: 14,
		date: new Date(),
		libelle: "azer"}},
			{numCompte:2,dateCreation: new Date(),solde:506,rib:"sam",decouverteAutorise:20,tauxAgios:10,operations:{montant: 14,
		date: new Date(),
		libelle: "azer"}},
		{numCompte:3,dateCreation: new Date(),solde:506,rib:"sam",decouverteAutorise:20,tauxAgios:10,operations:{montant: 14,
		date: new Date(),
		libelle: "azer"}},
		{numCompte:4,dateCreation: new Date(),solde:506,rib:"sam",decouverteAutorise:20,tauxAgios:10,operations:{montant: 14,
		date: new Date(),
		libelle: "azer"}}

			]


//TODO Creer plusieurs comptes
export const epargne : CompteEpargne[] = [
			{numCompte:1,dateCreation: new Date(),solde:506,rib:"sam",decouverteAutorise:20,tauxAgios:10,operations:{montant: 14,
		date: new Date(),libelle: "azer"},tauxInteret:12,montantRemuneration:10},
			
			{numCompte:2,dateCreation: new Date(),solde:400,rib:"sam",decouverteAutorise:20,tauxAgios:10,operations:{montant: 14,
		date: new Date(),libelle: "azer"},tauxInteret:12,montantRemuneration:10},


			{numCompte:3,dateCreation: new Date(),solde:652,rib:"sam",decouverteAutorise:20,tauxAgios:10,operations:{montant: 14,
		date: new Date(),libelle: "azer"},tauxInteret:12,montantRemuneration:10},


			{numCompte:4,dateCreation: new Date(),solde:506,rib:"sam",decouverteAutorise:20,tauxAgios:10,operations:{montant: 14,
		date: new Date(),libelle: "azer"},tauxInteret:12,montantRemuneration:10}
		


			]

