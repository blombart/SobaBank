package com.bl.service;

import java.io.File;
import java.util.List;

import com.bl.model.Client;
import com.bl.model.DemandeChequier;
import com.bl.model.DemandeModifMdp;
import com.bl.model.DemandeNouveauCompte;

public interface IAgentService {

	public List<Client> getAllClient(Long id);
	
	public Client updateClient(Client client);
	
	public List<File> getDocumentsForClient(Long idClient);
	
	public List<DemandeChequier> getAllDemandeChequier(Long idAgent);
	
	public List<DemandeModifMdp> getAllDemandeMdp(Long idAgent);
	
	public List<DemandeNouveauCompte> getAllDemandeNouveauCompte(Long idAgent);
	
	public DemandeChequier updateDemandeChequier(DemandeChequier dem);
	
	public DemandeModifMdp updateDemandeModifMdp(DemandeModifMdp dem);
	
	public DemandeNouveauCompte updateDemandeNouveauCompte(DemandeNouveauCompte dem);
 }
