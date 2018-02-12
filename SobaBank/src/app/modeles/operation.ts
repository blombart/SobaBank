
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

	new Operation (150,new Date(),"debit"),
	new Operation (300,new Date(),"credit"),
	new Operation (400,new Date(),"debit"),
	new Operation (50,new Date(),"debit"),
	new Operation (30,new Date(),"credit"),
	new Operation (40,new Date(),"debit")

]

