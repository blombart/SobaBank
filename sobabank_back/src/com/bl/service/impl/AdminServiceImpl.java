package com.bl.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bl.dao.IAgentDAO;
import com.bl.dao.IClientDAO;
import com.bl.dao.IDemandeOuvertureDAO;
import com.bl.model.Agent;
import com.bl.model.Client;
import com.bl.model.DemandeOuvertureCompte;
import com.bl.service.IAdminService;

@Component
public class AdminServiceImpl implements IAdminService {
	@Autowired
	private IAgentDAO agentDAO;
	@Autowired
	private IDemandeOuvertureDAO demOuvDAO;
	@Autowired
	private IClientDAO clientDAO;

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
	public Boolean deleteAgent(Long id) {
		boolean b = false;
		Agent _agent = agentDAO.getAgentById(id);
		if (_agent.getClients().size() == 0) {
			agentDAO.deleteAgent(id);
			b= true;
		} else {
			System.out.println("Impossible de supprimer l'agent");
		}
		return b;
	}

	@Override
	public Boolean affecterDemande(Long idAgent, Long idDemOuv) {
		// TODO Auto-generated method stub
		// On recupere l'agent et la demande a lier
		Agent agent = agentDAO.getAgentById(idAgent);
		DemandeOuvertureCompte dem = demOuvDAO.getDemandeById(idDemOuv);

		// On edite la demande
		dem.setDateAffectation(new Date());
		dem.setIsAffected(true);
		dem.setStatus("NON TRAITEE");
		dem.setAgent(agent);

		// On ajoute la demande a l'agent
		agent.getDemandesOuverture().add(dem);

		// On update agent et demande
		agentDAO.updateAgent(agent);
		demOuvDAO.updateDemande(dem);
		
		return true;
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

	@Override
	public Boolean modifierAffectation(Long idNewAgent, Long idOldAgent, Long idDem) {
		Agent newAgent = agentDAO.getAgentById(idNewAgent);
		Agent oldAgent = agentDAO.getAgentById(idOldAgent);
		DemandeOuvertureCompte dem = demOuvDAO.getDemandeById(idDem);
		Client client = clientDAO.GetClientById(dem.getClient().getId());
		
		dem.setAgent(newAgent);

		//on ajoute la nouvelle demande a l'agent et le client en meme temps
		newAgent.getDemandesOuverture().add(dem);
		newAgent.getClients().add(dem.getClient());
		
		//on supprime la demande de l'ancien agent et le client
		oldAgent.getDemandesOuverture().remove(dem);
		oldAgent.getClients().remove(dem.getClient());
		
		client.setMonAgent(newAgent);
		
		agentDAO.updateAgent(oldAgent);
		agentDAO.updateAgent(newAgent);
		clientDAO.updateClient(client);
		demOuvDAO.updateDemande(dem);
		
		return true;
	}

	@Override
	public DemandeOuvertureCompte createDemande(Long idClient) {
		//On recupere le client tout juste creer
		Client client = clientDAO.GetClientById(idClient);
		//ON creer une nouvelle demande et on set les attributs
		DemandeOuvertureCompte dem = new DemandeOuvertureCompte();
		dem.setClient(client);
		dem.setDateDemande(new Date());
		dem.setIsAffected(false);
		dem.setStatus("NON TRAITEE");
		//On ajoute la demande dans la liste
		demOuvDAO.addDemande(dem);
		
		return dem;
	}
	
	

}
