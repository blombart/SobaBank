package com.bl.model;



public class CompteEpargne extends Compte {
	private float tauxInteret;
	private float montantRemu;
	
	
	public CompteEpargne() {
		super();
	}


	public float getTauxInteret() {
		return tauxInteret;
	}


	public void setTauxInteret(float tauxInteret) {
		this.tauxInteret = tauxInteret;
	}


	public float getMontantRemu() {
		return montantRemu;
	}


	public void setMontantRemu(float montantRemu) {
		this.montantRemu = montantRemu;
	}
	
	

}
