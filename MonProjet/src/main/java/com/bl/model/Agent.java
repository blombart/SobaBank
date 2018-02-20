package com.bl.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "agent")
@DiscriminatorValue("Agent")
public class Agent extends User {
	@Column
	private String matricule;
	@Column
	private Date dateDebutContrat;
	@Column
	private String numTel;
	
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JsonProperty(access = Access.WRITE_ONLY)
	private List<Client> clients = new ArrayList<Client>();
	
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private List<DemandeOuvertureCompte> demandesOuverture = new ArrayList<DemandeOuvertureCompte>();
	
	public Agent() {
		super();
	}

	public Agent(Date dateDebutContrat) {
		super();
		this.dateDebutContrat = dateDebutContrat;
	}

	public String getMatricule() {
		return matricule;
	}
	
	public void setMatricule(String matricule){
		this.matricule = matricule;
	}

	public void generateMatricule() {
		long idAgent = super.getId() ;
		if(idAgent<10){
			setMatricule("A00" + idAgent);
			System.out.println("generate mat");
		} else if (idAgent>10 & idAgent<100){
			setMatricule("A0" + idAgent);
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
	
	public void addDemandeOuvertureCompte(DemandeOuvertureCompte dem){
		this.demandesOuverture.add(dem);
	}

}
