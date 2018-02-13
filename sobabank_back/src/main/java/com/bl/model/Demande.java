package com.bl.model;

import java.util.Date;

public class Demande {
	private Long id;
	private Date dateDemande;
	private String libelle;
	private String status;
	private Boolean isValid;

	public Demande(){
		
	}
	
	public Demande(Long id, Date dateDemande, String libelle, String status, Boolean isValid) {
		super();
		this.id = id;
		this.dateDemande = dateDemande;
		this.libelle = libelle;
		this.status = status;
		this.isValid = isValid;
	}

	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getLibelle() {
		return libelle;
	}
	
	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}
	
	
	public String getStatus() {
		return status;
	}
	
	public void setStatus(String status) {
		this.status = status;
	}
	
	public Boolean getIsValid() {
		return isValid;
	}
	
	public void setIsValid(Boolean isValid) {
		this.isValid = isValid;
	}

	public Date getDateDemande() {
		return dateDemande;
	}

	public void setDateDemande(Date dateDemande) {
		this.dateDemande = dateDemande;
	}
	
	
	
	
}
