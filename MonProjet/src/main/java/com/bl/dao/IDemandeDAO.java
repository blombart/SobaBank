package com.bl.dao;

import java.util.List;

import com.bl.model.Demande;
import com.bl.model.DemandeNouveauCompte;

public interface IDemandeDAO {
	public List<Demande> getAllDemande();
	
	public Demande addDemande(Demande dem);
	
	public Demande updateDemande(Demande dem);
	
	public void deleteDemande(Long id);
	
	public Demande getDemandeById(Long id);
	
	List<DemandeNouveauCompte> getDemandeByIdAgent(Long idAgent);
	
}
