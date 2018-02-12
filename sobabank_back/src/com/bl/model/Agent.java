package com.bl.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Agent extends User {
	private String matricule;
	private Date dateDebutContrat;
	private String numTel;
	private List<Client> clients = new ArrayList<Client>();
	private List<DemandeOuvertureCompte> demandesOuverture = new ArrayList<DemandeOuvertureCompte>();

	public Agent() {
		super();
	}

	public Agent(Date dateDebutContrat) {
		super();
		this.dateDebutContrat = dateDebutContrat;
		generateMatricule();
	}

	public String getMatricule() {
		return matricule;
	}
	
	public void setMatricule(String matricule){
		this.matricule = matricule;
	}

	public void generateMatricule() {
		long idAgent = super.getId();
		if(idAgent<10){
			this.matricule = "A00" + idAgent;
		} else if (idAgent>10 & idAgent<100){
			this.matricule = "A0" + idAgent;
		}
	}

	public Date getDateDebutContrat() {
		return dateDebutContrat;
	}

	public void setDateDebutContrat(Date dateDebutContrat) {
		this.dateDebutContrat = dateDebutContrat;
	}

	public String getNumTel() {
		return numTel;
	}

	public void setNumTel(String numTel) {
		this.numTel = numTel;
	}

	public List<Client> getClients() {
		return clients;
	}

	public void setClients(List<Client> clients) {
		this.clients = clients;
	}

	public List<DemandeOuvertureCompte> getDemandesOuverture() {
		return demandesOuverture;
	}

	public void setDemandesOuverture(List<DemandeOuvertureCompte> demandesOuverture) {
		this.demandesOuverture = demandesOuverture;
	}

}
