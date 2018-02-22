package com.bl.dao;

import java.util.Set;

import com.bl.model.Demande;
import com.bl.model.DemandeChequier;
import com.bl.model.DemandeNouveauCompte;

public interface IDemandeDAO {
	public Set<Demande> getAllDemande();
	
	public Demande addDemande(Demande dem);
	
	public Demande updateDemande(Demande dem);
	
	public void deleteDemande(Long id);
	
	public Demande getDemandeById(Long id);
	
	Set<DemandeNouveauCompte> getDemandeByIdAgent(Long idAgent);

	Set<DemandeChequier> getAllDemandesChequierByIdAgent(Long idAgent);
	
}
