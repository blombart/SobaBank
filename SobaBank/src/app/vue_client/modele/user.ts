export class User {

  adresse: string;
  numTel: number;
  nbEnfants: number;
  situationMartrimoniale: string;

  constructor(adresse: string, numTel: number, nbEnfants: number, situationMartrimoniale: string){
    this.adresse = adresse;
    this.numTel = numTel;
    this.nbEnfants = nbEnfants;
    this.situationMartrimoniale = situationMartrimoniale;
  }

}