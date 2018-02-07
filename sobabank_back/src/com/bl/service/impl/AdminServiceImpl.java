package com.bl.service.impl;

import java.util.Date;
import java.util.List;

import com.bl.dao.IAgentDAO;
import com.bl.dao.IDemandeOuvertureDAO;
import com.bl.dao.impl.AgentDAOImpl;
import com.bl.dao.impl.DemandeOuvertureDAOImpl;
import com.bl.model.Agent;
import com.bl.model.DemandeOuvertureCompte;
import com.bl.service.IAdminService;

public class AdminServiceImpl implements IAdminService {
	private IAgentDAO agentDAO = new AgentDAOImpl();
	private IDemandeOuvertureDAO demOuvDAO = new DemandeOuvertureDAOImpl();
	
	@Override
	public List<Agent> getAllAgent() {
		List<Agent> agents = agentDAO.getAllAgents();
		return agents;
	}

	@Override
	public Agent updateAgent(Agent agent) {
		Agent _agent = agentDAO.updateAgent(agent);
		return _agent;
	}

	@Override
	public void deleteAgent(Long id) {
		Agent _agent = agentDAO.getAgentById(id);
		if (_agent.getClients().size() == 0){
			agentDAO.deleteAgent(id);
		}else{
			System.out.println("Impossible de supprimer l'agent");
		}
	}

	@Override
	public void affecterDemande(Long idAgent, Long idDemOuv) {
		// TODO Auto-generated method stub
		//On recupere l'agent et la demande a lier
		Agent agent = agentDAO.getAgentById(idAgent);
		DemandeOuvertureCompte dem = demOuvDAO.getDemandeById(idDemOuv);
		
		//On edite la demande
		dem.setDateAffectation(new Date());
		dem.setIsAffected(true);
		dem.setStatus("NON TRAITEE");
		dem.setAgent(agent);
		
		//On ajoute la demande a l'agent
		agent.getDemandesOuverture().add(dem);
		
		//On update agent et demande
		agentDAO.updateAgent(agent);
		demOuvDAO.updateDemande(dem);
	}

	@Override
	public Agent addAgent(Agent agent) {
		Agent _agent = agentDAO.addAgent(agent);
		return _agent;
	}

	@Override
	public Agent getAgentById(Long id) {
		Agent agent = agentDAO.getAgentById(id);
		return agent;
	}

	@Override
	public Agent getAgentByMatricule(String matricule) {
		Agent agent = agentDAO.getAgentByMatricule(matricule);
		return agent;
	}

	@Override
	public List<DemandeOuvertureCompte> getAllDemandeOuvertureCompte() {
		List<DemandeOuvertureCompte> demandes = demOuvDAO.getAllDemande();
		return demandes;
	}



}
