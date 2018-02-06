package com.bl.model;

import java.util.Date;

public class DemandeOuvertureCompte extends Demande {
	private Date dateAffectation;
	private Client client;
	
	public DemandeOuvertureCompte() {
		super();
		// TODO Auto-generated constructor stub
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


}
