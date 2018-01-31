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
			new Compte(1,new Date(),506,"sam",20,10,[null, null]),
			new Compte(1,new Date(),506,"sam",20,10,[null, null]),
			new Compte(1,new Date(),506,"sam",20,10,[null, null]),
			new Compte(1,new Date(),506,"sam",20,10,[null, null])

			]