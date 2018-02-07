package com.bl.service;

import java.util.List;

import com.bl.model.Agent;
import com.bl.model.DemandeOuvertureCompte;

public interface IAdminService {
	public List<Agent> getAllAgent();
	
	public Agent addAgent(Agent agent);
	
	public Agent updateAgent(Agent agent);
	
	public void deleteAgent(Long id);
	
	public void affecterDemande(Long idAgent, Long idDemOuv);
	
	public Agent getAgentById(Long id);
	
	public Agent getAgentByMatricule(String matricule);
	
	public List<DemandeOuvertureCompte> getAllDemandeOuvertureCompte();
	
}
