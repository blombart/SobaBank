package com.bl.model;

import java.util.Date;


public class DemandeOuvertureCompte {
	private Long id;
	private Date dateDemande;
	private Boolean isAffected;
	private String Status;
	private Boolean isValid;
	private Date dateAffectation;
	private Client client;
	private Agent agent;
	
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

	public Agent getAgent() {
		return agent;
	}

	public void setAgent(Agent agent) {
		this.agent = agent;
	}
	
	



}
