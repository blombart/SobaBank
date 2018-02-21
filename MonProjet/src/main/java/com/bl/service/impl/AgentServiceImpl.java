package com.bl.service.impl;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.bl.dao.IAgentDAO;
import com.bl.dao.IClientDAO;
import com.bl.dao.ICompteDAO;
import com.bl.dao.IDemandeDAO;
import com.bl.dao.IDemandeOuvertureDAO;
import com.bl.model.Agent;
import com.bl.model.Client;
import com.bl.model.Compte;
import com.bl.model.Demande;
import com.bl.model.DemandeChequier;
import com.bl.model.DemandeModifMdp;
import com.bl.model.DemandeNouveauCompte;
import com.bl.model.DemandeOuvertureCompte;
import com.bl.service.IAgentService;

@Service("agentService")
@Transactional
public class AgentServiceImpl implements IAgentService {
	@Autowired
	private IAgentDAO agentDAO;
	@Autowired
	private IClientDAO clientDAO;
	@Autowired
	private IDemandeDAO demandeDAO;
	@Autowired
	private ICompteDAO compteDAO;
	@Autowired
	private IDemandeOuvertureDAO demOuvDAO;
	
	@Override
	public List<Client> getAllClient(Long id) {
		Agent ag = agentDAO.getAgentById(id);
		List<Client> clients = ag.getClients();
		return clients;
	}
	
	@Override
	public Client updateClient(Client client) {
		Client cl = clientDAO.updateClient(client);
		return cl;
	}

	@Override
	public List<File> getDocumentsForClient(Long idClient) {
		Client cl = clientDAO.GetClientById(idClient);
		List<File> files = cl.getFiles();
		return files;
	}

	@Override
	public List<DemandeChequier> getAllDemandeChequier(Long idAgent) {
		Agent ag = agentDAO.getAgentById(idAgent);
		List<DemandeChequier> demandesChequier = new ArrayList<DemandeChequier>();
		//on boucle sur tous les clients de l'agent
		for(Client c: ag.getClients()){
			//On boucle sur les demandes du client
			for(Demande d :c.getDemandes()){
				//Si la demande est de type DemandeChequier
				if(d instanceof DemandeChequier){
					//On caste la demande en demandechequier pour l'ajouter dans la liste
					demandesChequier.add((DemandeChequier)d);
				}
			}
		}
		return demandesChequier;
	}

	@Override
	public List<DemandeModifMdp> getAllDemandeMdp(Long idAgent) {
		Agent ag = agentDAO.getAgentById(idAgent);
		List<DemandeModifMdp> demandesMdp = new ArrayList<DemandeModifMdp>();
		//on boucle sur tous les clients de l'agent
		for(Client c: ag.getClients()){
			//On boucle sur les demandes du client
			for(Demande d :c.getDemandes()){
				//Si la demande est de type DemandeChequier
				if(d instanceof DemandeModifMdp){
					//On caste la demande en demandechequier pour l'ajouter dans la liste
					demandesMdp.add((DemandeModifMdp)d);
				}
			}
		}
		
		return demandesMdp;
	}

	@Override
	public List<DemandeNouveauCompte> getAllDemandeNouveauCompte(Long idAgent) {
		List<DemandeNouveauCompte> demandesNouveauCompte = demandeDAO.getDemandeByIdAgent(idAgent);
		
		return demandesNouveauCompte;
	}

	@Override
	public DemandeChequier updateDemandeChequier(DemandeChequier dem) {
		DemandeChequier chequier = (DemandeChequier)demandeDAO.updateDemande(dem);
		//TODO surement implementer une methode pour faire qqch si la demande est valid�
		return chequier;
	}

	@Override
	public DemandeModifMdp updateDemandeModifMdp(DemandeModifMdp dem) {
		DemandeModifMdp mdp = (DemandeModifMdp)demandeDAO.updateDemande(dem);
		//TODO surement implementer une methode pour generer un mdp si la demande est valid�
		return mdp;
	}

	@Override
	public DemandeNouveauCompte updateDemandeNouveauCompte(
			DemandeNouveauCompte dem) {
		DemandeNouveauCompte nouveauCompte = (DemandeNouveauCompte)demandeDAO.updateDemande(dem);
		//ON recupere le compte et on l'ajoute dans la liste des comptes 
		Compte cp = nouveauCompte.getNewCompte();
		compteDAO.addCompte(cp);
		
		return nouveauCompte;
	}

	@Override
	public List<DemandeOuvertureCompte> getAllDemandeOuvertureCompte(
			Long idAgent) {
		Agent ag = agentDAO.getAgentById(idAgent);
		List<DemandeOuvertureCompte> dems = ag.getDemandesOuverture();
		return dems;
	}
	
	@Override
	public DemandeOuvertureCompte validDemandeOuvertureCompte(Long idDem) {
		DemandeOuvertureCompte dem = demOuvDAO.getDemandeById(idDem);
		Client cl = clientDAO.GetClientById(dem.getIdClient());
		
		dem.setIsValid(true);
		dem.setStatus("TRAITEE");
		cl.setIsClient(true);
		cl.setRole("client");
		cl.generateMdp();
		
		Agent ag = agentDAO.getAgentByDem(idDem);
		ag.getClients().add(cl);
		agentDAO.updateAgent(ag);
		
		
		return dem;
	}


	

}
