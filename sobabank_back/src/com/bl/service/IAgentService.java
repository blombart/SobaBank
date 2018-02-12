package com.bl.service;

import java.util.List;

import com.bl.model.Client;
import com.bl.model.Demande;
import com.bl.model.DemandeOuvertureCompte;

public interface IAgentService {

	public List<Client> getAllClient(Long id);
	
	public List<Demande> getAllDemandeByType(String type);
	
	public List<DemandeOuvertureCompte> getAllDemandeOuvertureCompte();
	
	public Client updateClient(Client client);
	
	public DemandeOuvertureCompte updateDemandeOuvertureCompte(DemandeOuvertureCompte dem);
	
	public Demande updateDemande(Demande dem);
}
