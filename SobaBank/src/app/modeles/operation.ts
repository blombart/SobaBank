
import {Compte} from './compte';


export class Operation{
	constructor(id: number,
		montant: number,
		date: Date,
		libelle: String
		){
	}
}

//TODO Creer plusieurs operations

export const operations : Operation[] = [

	new Operation (1,150,new Date(),"debit"),
	new Operation (2,300,new Date(),"credit"),
	new Operation (3,400,new Date(),"debit"),
	new Operation (4,50,new Date(),"debit"),
	new Operation (5,30,new Date(),"credit"),
	new Operation (6,40,new Date(),"debit")

]

