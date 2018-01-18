
export class Client {

	private nom: String;
	private prenom: String;
	private adresse:String;
	private numTel: String;


  constructor(nom: String, prenom: String, adresse : String, numTel: String) {
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
    this.numTel = numTel;
  }

}