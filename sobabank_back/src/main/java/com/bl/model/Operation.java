package com.bl.model;

import java.util.Date;

public class Operation {
	private Long id;
	private float montant;
	private Date date;
	private String libelle;
	
	public Operation(){
		
	}

	public Operation(float montant, Date date, String libelle) {
		super();
		this.montant = montant;
		this.date = date;
		this.libelle = libelle;
	}

	public float getMontant() {
		return montant;
	}

	public void setMontant(float montant) {
		this.montant = montant;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getLibelle() {
		return libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}


	
	
	
}
