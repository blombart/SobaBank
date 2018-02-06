package com.bl.model;



public class DemandeNouveauCompte extends Demande {
	private Compte newCompte;
	


	public DemandeNouveauCompte() {
		super();
	}

	public Compte getNewCompte() {
		return newCompte;
	}

	public void setNewCompte(Compte newCompte) {
		this.newCompte = newCompte;
	}

}
