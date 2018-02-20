package com.bl.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Table;


@Entity
@Table(name = "Compte Epargne")
@DiscriminatorColumn
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

	public CompteEpargne(Long id, int numCompte, Date dateCreation,
			float solde, String rib, float decouvertAutorise, float tauxAgios,
			List<Operation> operations) {
		super(id, numCompte, dateCreation, solde, rib, decouvertAutorise, tauxAgios,
				operations);
		// TODO Auto-generated constructor stub
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
