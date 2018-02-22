package com.bl.service;

import java.util.List;
import java.util.Set;

import com.bl.model.Agent;
import com.bl.model.DemandeOuvertureCompte;

public interface IAdminService {
	public Set<Agent> getAllAgent();
	
	public Agent addAgent(Agent agent);
	
	public Agent updateAgent(Agent agent);
	
	public Agent deleteAgent(Long id);
	
	public Boolean affecterDemande(Long idAgent, Long idDemOuv);
	
	public Agent getAgentById(Long id);
	
	public Agent getAgentByMatricule(String matricule);
	
	public Set<DemandeOuvertureCompte> getAllDemandeOuvertureCompte();
	
	public Boolean modifierAffectation(Long idNewAgent, Long idOldAgent, Long idDem);
	
//	public DemandeOuvertureCompte createDemande(Long idClient);
	
	public Boolean inscriptionClient(String nom, String prenom, String email,
			String adresse, String numTel, int nbEnfants,
			String situationMatrimonial);


}
