package com.bl.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToOne;


@Entity
@DiscriminatorValue("nouveauCompte")
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
