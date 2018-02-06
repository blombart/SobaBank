package com.bl.dao;

import java.util.List;


import com.bl.model.DemandeOuvertureCompte;

public interface IDemandeOuvertureDAO {
	public List<DemandeOuvertureCompte> getAllDemande();
	
	public DemandeOuvertureCompte addDemande(DemandeOuvertureCompte dem);
	
	public DemandeOuvertureCompte updateDemande(DemandeOuvertureCompte dem);
	
	public DemandeOuvertureCompte getDemandeById(Long id);
}
