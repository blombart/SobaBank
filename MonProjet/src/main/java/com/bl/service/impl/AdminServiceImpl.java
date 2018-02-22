package com.bl.service.impl;

import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bl.dao.IAgentDAO;
import com.bl.dao.IClientDAO;
import com.bl.dao.IDemandeOuvertureDAO;
import com.bl.model.Agent;
import com.bl.model.Client;
import com.bl.model.DemandeOuvertureCompte;
import com.bl.service.IAdminService;

@Service("adminService")
@Transactional
public class AdminServiceImpl implements IAdminService {
	@Autowired
	private IAgentDAO agentDAO;
	@Autowired
	private IDemandeOuvertureDAO demOuvDAO;
	@Autowired
	private IClientDAO clientDAO;

	@Override
	public Set<Agent> getAllAgent() {
		Set<Agent> agents = agentDAO.getAllAgents();
		return agents;
	}

	@Override
	public Agent updateAgent(Agent agent) {
		Agent _agent = agentDAO.updateAgent(agent);
		return _agent;
	}

	@Override
	public Agent deleteAgent(Long id) {
		Agent _agent = agentDAO.getAgentById(id);
		if (_agent.getClients().size() == 0) {
			agentDAO.deleteAgent(id);
		} else {
			System.out.println("Impossible de supprimer l'agent");
		}
		return _agent;
	}

	@Override
	public Boolean affecterDemande(Long idAgent, Long idDemOuv) {
		Boolean b = false;
		// TODO Auto-generated method stub
		// On recupere l'agent et la demande a lier
		Agent agent = agentDAO.getAgentById(idAgent);
		DemandeOuvertureCompte dem = demOuvDAO.getDemandeById(idDemOuv);

		
		
		// On edite la demande
		dem.setDateAffectation(new Date());
		dem.setIsAffected(true);
		dem.setStatus("NON TRAITEE");

		agent.getDemandesOuverture().add(dem);
		agentDAO.updateAgent(agent);
		// On ajoute la demande a l'agent
		//agent.addDemandeOuvertureCompte(dem);
		
		// On update agent et demande
		//agentDAO.updateAgent(agent);
		//demOuvDAO.updateDemande(dem);
		b= true;
		
		return b;
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
	public Set<DemandeOuvertureCompte> getAllDemandeOuvertureCompte() {
		Set<DemandeOuvertureCompte> demandes = demOuvDAO.getAllDemande();
		return demandes;
	}

	@Override
	public Boolean modifierAffectation(Long idNewAgent, Long idOldAgent, Long idDem) {
		Agent newAgent = agentDAO.getAgentById(idNewAgent);
		Agent oldAgent = agentDAO.getAgentById(idOldAgent);
		DemandeOuvertureCompte dem = demOuvDAO.getDemandeById(idDem);
		Client client = clientDAO.GetClientById(dem.getIdClient());
		
//		dem.setIdAgent(idNewAgent);

		//on ajoute la nouvelle demande a l'agent et le client en meme temps
		newAgent.getDemandesOuverture().add(dem);
		newAgent.getClients().add(client);
		
		//on supprime la demande de l'ancien agent et le client
		oldAgent.getDemandesOuverture().remove(dem);
		oldAgent.getClients().remove(client);
		
//		client.setMonAgent(newAgent.getId());
		
		agentDAO.updateAgent(oldAgent);
		agentDAO.updateAgent(newAgent);
		clientDAO.updateClient(client);
		demOuvDAO.updateDemande(dem);
		
		return true;
	}

//	@Override
//	public DemandeOuvertureCompte createDemande(Long idClient) {
//		//On recupere le client tout juste creer
//		Client client = clientDAO.GetClientById(idClient);
//		//ON creer une nouvelle demande et on set les attributs
//		DemandeOuvertureCompte dem = new DemandeOuvertureCompte();
//		dem.setId(0L);
//		dem.setClient(client);
//		dem.setDateDemande(new Date());
//		dem.setIsAffected(false);
//		dem.setStatus("NON TRAITEE");
//		//On ajoute la demande dans la liste
//		demOuvDAO.addDemande(dem);
//		
//		return dem;
//	}
//	
	@Override
	public Boolean inscriptionClient(String nom, String prenom, String email,
			String adresse, String numTel, int nbEnfants,
			String situationMatrimonial) {
		
		//On creer une nouvelle demande auquel on affecte le client tout juste creer
		DemandeOuvertureCompte dem = new DemandeOuvertureCompte();
		dem.setDateDemande(new Date());
		dem.setIsAffected(false);
		dem.setStatus("NON TRAITEE");
		demOuvDAO.addDemande(dem);
		
		//on creer le nouveau client 
		Client client = new Client(adresse, numTel, nbEnfants, situationMatrimonial, null, null, null, false);
		client.setNom(nom);client.setPrenom(prenom);client.setEmail(email);
		Client client_dem = clientDAO.createClient(client);
		
		
		
		dem.setIdClient(client.getId()); 

		//On ajoute la demande dans la liste
		
		return true;
	}


	
	

}
