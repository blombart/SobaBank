export class Operation  {

    numero: number;
	date: String;
	type: String;
	montant: number;
	


	constructor(date: String, type: String, montant: number, numero: number) {
		this.date =  date;
		this.type = type;
		this.montant = montant;
		this.numero = numero;
		
		
	}
}