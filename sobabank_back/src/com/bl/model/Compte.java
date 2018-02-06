package com.bl.model;

import java.util.Date;

public class Compte {
	private Long id;
	private int numCompte;
	private Date dateCreation;
	private float solde;
	private String rib;
	private float decouvertAutorise;
	private float tauxAgios;
	private Operation[] operations;
	
	public Compte(){
		
	}
	
	public Compte(Long id, int numCompte, Date dateCreation, float solde,
			String rib, float decouvertAutorise, float tauxAgios,
			Operation[] operations) {
		this.id = id;
		this.numCompte = numCompte;
		this.dateCreation = dateCreation;
		this.solde = solde;
		this.rib = rib;
		this.decouvertAutorise = decouvertAutorise;
		this.tauxAgios = tauxAgios;
		this.operations = operations;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getNumCompte() {
		return numCompte;
	}

	public void setNumCompte(int numCompte) {
		this.numCompte = numCompte;
	}

	public Date getDateCreation() {
		return dateCreation;
	}

	public void setDateCreation(Date dateCreation) {
		this.dateCreation = dateCreation;
	}

	public float getSolde() {
		return solde;
	}

	public void setSolde(float solde) {
		this.solde = solde;
	}

	public String getRib() {
		return rib;
	}

	public void setRib(String rib) {
		this.rib = rib;
	}

	public float getDecouvertAutorise() {
		return decouvertAutorise;
	}

	public void setDecouvertAutorise(float decouvertAutorise) {
		this.decouvertAutorise = decouvertAutorise;
	}

	public float getTauxAgios() {
		return tauxAgios;
	}

	public void setTauxAgios(float tauxAgios) {
		this.tauxAgios = tauxAgios;
	}

	public Operation[] getOperations() {
		return operations;
	}

	public void setOperations(Operation[] operations) {
		this.operations = operations;
	}
	
	
	
	
}
