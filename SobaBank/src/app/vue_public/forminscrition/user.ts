export class User  {

	nom:string;
	prenom:string;
	email:string;
	numTel:string
	
	constructor(name: string, lastname: string, email: string, phoneNumber: string) {
		this.nom = name;
		this.prenom = lastname;
		this.email = email;
		this.numTel = phoneNumber;
	}
}