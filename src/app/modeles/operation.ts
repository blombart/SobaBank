
import {Compte} from './compte';


export class Operation{
	constructor(
		montant: number,
		date: Date,
		libelle: String
		){
	}
}

//TODO Creer plusieurs operations
export const operations : Operation[] = [
	{ montant : 100, date : new Date(), libelle : "Retrait"},
	{ montant : 200, date : new Date(), libelle : "Retrait"},
	{ montant : 300, date : new Date(), libelle : "debit"},
	{ montant : 400, date : new Date(), libelle : "debit"},
	{ montant : 500, date : new Date(), libelle : "Retrait"},
	{ montant : 600, date : new Date(), libelle : "Retrait"}
]
