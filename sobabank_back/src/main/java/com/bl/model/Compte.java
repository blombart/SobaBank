package com.bl.model;

import java.util.Date;
import java.util.List;

public class Compte {
	private Long id;
	private int numCompte;
	private Date dateCreation;
	private float solde;
	private String rib;
	private float decouvertAutorise;
	private float tauxAgios;
	private List<Operation> operations;
	
	public Compte(){
		this.decouvertAutorise = 0f;
		this.tauxAgios = 18f;
	}
	


	public Compte(Long id, int numCompte, Date dateCreation, float solde, String rib, float decouvertAutorise,
			float tauxAgios, List<Operation> operations) {
		super();
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

	public List<Operation> getOperations() {
		return operations;
	}

	public void setOperations(List<Operation> operations) {
		this.operations = operations;
	}
	
	public void crediter(float montant){
		this.solde += montant;
	}
	
	public void debiter(float montant){
		//Si le compte a un decouvert
		if(decouvertAutorise !=0){
			//on debite seulement si le solde ne depasse pas le decouvert
			if((this.solde - montant) > decouvertAutorise){
				this.solde -= montant ;
			}
		}else{
			if((this.solde - montant) >=0){
				this.solde -= montant ;
			}
		}
	}

	

	
	
	
	
}
