package com.bl.model;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.OneToOne;


@Entity
@DiscriminatorValue("Demande new compte")
public class DemandeNouveauCompte extends Demande {
	
	@OneToOne
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
