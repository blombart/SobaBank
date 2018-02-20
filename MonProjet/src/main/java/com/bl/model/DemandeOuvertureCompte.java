package com.bl.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Transient;

@Entity
@DiscriminatorValue("Demande ouverture de compte")
public class DemandeOuvertureCompte {
	@Id
	@GeneratedValue
	private Long id;
	@Column
	private Date dateDemande;
	@Transient
	private Boolean isAffected;
	
	private String Status;
	@Transient
	private Boolean isValid;
	@Column
	private Date dateAffectation;
	
	private Client client;
	
	private Long idAgent;
	
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

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public Long getIdAgent() {
		return idAgent;
	}

	public void setIdAgent(Long idAgent) {
		this.idAgent = idAgent;
	}
	
	



}
