
export class Client {

  private numCompte: String;
	private nom: String;
	private prenom: String;
  private email: String;
	private adresse:String;
	private numTel: String;
  private situation: String;



  constructor(numCompte: String, nom: String, prenom: String, email: String, adresse : String, numTel: String, situation: String) {
    this.numCompte = numCompte;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.adresse = adresse;
    this.numTel = numTel;
    this.situation = situation;
  }

}