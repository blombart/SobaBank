package com.bl.service;

import java.io.File;
import java.util.Set;

import com.bl.model.Client;
import com.bl.model.DemandeChequier;
import com.bl.model.DemandeModifMdp;
import com.bl.model.DemandeNouveauCompte;
import com.bl.model.DemandeOuvertureCompte;

public interface IAgentService {

	public Set<Client> getAllClient(Long id);
	
	public Client updateClient(Client client);
	
	public Set<File> getDocumentsForClient(Long idClient);
	
	public Set<DemandeChequier> getAllDemandeChequier(Long idAgent);
	
	public Set<DemandeModifMdp> getAllDemandeMdp(Long idAgent);
	
	public Set<DemandeNouveauCompte> getAllDemandeNouveauCompte(Long idAgent);
	
	public DemandeChequier updateDemandeChequier(DemandeChequier dem);
	
	public DemandeModifMdp updateDemandeModifMdp(DemandeModifMdp dem);
	
	public DemandeNouveauCompte updateDemandeNouveauCompte(DemandeNouveauCompte dem);
	
	public Set<DemandeOuvertureCompte> getAllDemandeOuvertureCompte(Long idAgent);
	
	public DemandeOuvertureCompte validDemandeOuvertureCompte(Long idDem);

 }
