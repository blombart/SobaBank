export class Client  {

	adresse:String;
	numTel:String;
	nbEnfants:String;
	situationMatrimoniale:String;


	constructor(adresse:String, numTel:String,nbEnfants:String,situationMatrimoniale:String) {
		this.adresse =adresse;
		this.numTel = numTel;
		this.nbEnfants= nbEnfants;
		this.situationMatrimoniale=situationMatrimoniale;
		
	}
}