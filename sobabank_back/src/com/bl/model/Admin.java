package com.bl.model;

import java.util.ArrayList;
import java.util.List;

public class Admin extends User {
	private List<Agent> agents = new ArrayList<Agent>();
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
