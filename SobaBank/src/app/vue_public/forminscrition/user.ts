export class User  {

	nom:String;
	prenom:String;
	email:String;
	numTel:String;
	password: String;
	role :String
	
	constructor(name: string, lastname: string, email: string, phoneNumber: string, role: string) {
		this.nom = name;
		this.prenom = lastname;
		this.email = email;
		this.numTel = phoneNumber;
		this.role = role;
	}
}