package com.bl.dao.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.bl.dao.IDemandeOuvertureDAO;
import com.bl.model.Agent;
import com.bl.model.DemandeOuvertureCompte;

public class DemandeOuvertureDAOImpl implements IDemandeOuvertureDAO {
	static HashMap<Long, DemandeOuvertureCompte> demOuvMap = new HashMap<Long, DemandeOuvertureCompte>();
	
	@Override
	public List<DemandeOuvertureCompte> getAllDemande() {
		List<DemandeOuvertureCompte> demOuv = new ArrayList<DemandeOuvertureCompte>(demOuvMap.values());
		return demOuv;
	}

	@Override
	public DemandeOuvertureCompte addDemande(DemandeOuvertureCompte dem) {
		Long id = dem.getId();
		demOuvMap.put(id, dem);
		return demOuvMap.get(id);
	}

	@Override
	public DemandeOuvertureCompte updateDemande(DemandeOuvertureCompte dem) {
		if(demOuvMap.get(dem.getId()) != null){
			demOuvMap.get(dem.getId()).setDateDemande(dem.getDateDemande());
			demOuvMap.get(dem.getId()).setIsAffected(dem.getIsAffected());
			demOuvMap.get(dem.getId()).setStatus(dem.getStatus());
			demOuvMap.get(dem.getId()).setIsValid(dem.getIsValid());
			demOuvMap.get(dem.getId()).setDateAffectation(dem.getDateAffectation());
			demOuvMap.get(dem.getId()).setClient(dem.getClient());
		}else{
			demOuvMap.put(dem.getId(), dem);
		}
		return demOuvMap.get(dem.getId());
	}

	@Override
	public DemandeOuvertureCompte getDemandeById(Long id) {
		DemandeOuvertureCompte dem = demOuvMap.get(id);
		return dem;
	}

}
