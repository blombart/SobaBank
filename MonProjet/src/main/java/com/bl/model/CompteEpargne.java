package com.bl.model;


import javax.persistence.Column;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import javax.persistence.Table;


@Entity
@DiscriminatorValue("CompteEpargne")
public class CompteEpargne extends Compte {
	@Column
	private float tauxInteret;
	@Column
	private float montantRemu;
	
	
	public CompteEpargne() {
		super();
		this.tauxInteret = 2f;
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
