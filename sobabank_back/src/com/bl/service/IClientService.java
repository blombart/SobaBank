package com.bl.service;

import java.util.List;

import com.bl.model.Agent;
import com.bl.model.Client;
import com.bl.model.Compte;
import com.bl.model.DemandeChequier;
import com.bl.model.DemandeModifMdp;
import com.bl.model.DemandeNouveauCompte;
import com.bl.model.Operation;

public interface IClientService {
	public Client createClient(Client client);
	
	public List<Compte> getComptesByIdClient(Long idClient);
	
	public List<Operation> getOperationsByCompte(Long idCompte);
	
	public Compte getCompte(Long idCompte);
	
	public List<Operation> getOperationFilteredByCompte(Long idCompte, int mois);
	
	public DemandeModifMdp createDemandeMdpForClient(Long idClient);
	
	public DemandeChequier createDemandeChequierForClient(Long idClient);
	
	public DemandeNouveauCompte createDemandeNouveauCompteForClient(Long idClient, Compte compte);
	
	public Boolean virement(Long idCompteDebit, Long idCompteCredit, float montant, String libelle);
	
	public Boolean virement(Long idCompteDebit, String rib, float montant, String libelle);
	
	public Agent getAgentForClient(Long idClient);
}
