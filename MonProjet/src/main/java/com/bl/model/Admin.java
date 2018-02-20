package com.bl.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@DiscriminatorValue("Administrateur")
public class Admin extends User {
	
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private List<Agent> agents = new ArrayList<Agent>();
	
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private List<DemandeOuvertureCompte> demandes = new ArrayList<DemandeOuvertureCompte>();
	
	public Admin(){
		super();
	}
	
	public List<Agent> getAgents() {
		return agents;
	}

	public void setAgents(List<Agent> agents) {
		this.agents = agents;
	}

	public List<DemandeOuvertureCompte> getDemandes() {
		return demandes;
	}

	public void setDemandes(List<DemandeOuvertureCompte> demandes) {
		this.demandes = demandes;
	}
	
	
	
}
