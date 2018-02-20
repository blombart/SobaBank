package com.bl.model;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;


@Entity
@DiscriminatorValue("Demande new compte")
public class DemandeNouveauCompte extends Demande {
	@Column
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
