package com.bl.model;

import java.util.Date;


import javax.persistence.Column;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;


@Entity
public class DemandeOuvertureCompte {
	@Id
	@GeneratedValue
	private Long id;
	
	@Column
	private Date dateDemande;
	
	@Column
	private Boolean isAffected;
	
	@Column
	private String Status;
	
	@Column
	private Boolean isValid;
	
	@Column
	private Date dateAffectation;

	
	public Long getIdClient() {
		return idClient;
	}

	public void setIdClient(Long idClient) {
		this.idClient = idClient;
	}

	private Long idClient;
	
	

	public DemandeOuvertureCompte() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getDateDemande() {
		return dateDemande;
	}

	public void setDateDemande(Date dateDemande) {
		this.dateDemande = dateDemande;
	}

	public Boolean getIsAffected() {
		return isAffected;
	}

	public void setIsAffected(Boolean isAffected) {
		this.isAffected = isAffected;
	}

	public String getStatus() {
		return Status;
	}

	public void setStatus(String status) {
		Status = status;
	}

	public Boolean getIsValid() {
		return isValid;
	}

	public void setIsValid(Boolean isValid) {
		this.isValid = isValid;
	}

	public Date getDateAffectation() {
		return dateAffectation;
	}

	public void setDateAffectation(Date dateAffectation) {
		this.dateAffectation = dateAffectation;
	}

	


}
