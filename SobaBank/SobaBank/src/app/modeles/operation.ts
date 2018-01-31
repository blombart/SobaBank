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

	new Operation (1,new Date(),"sam"),
	new Operation (1,new Date(),"sam"),
	new Operation (1,new Date(),"sam"),



]