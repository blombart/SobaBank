export class User  {

	nom:String;
	prenom:String;
	email:String;
	numTel:String;
	password: String
	
	constructor(name: string, lastname: string, email: string, phoneNumber: string) {
		this.nom = name;
		this.prenom = lastname;
		this.email = email;
		this.numTel = phoneNumber;
	}
}