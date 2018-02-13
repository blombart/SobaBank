package com.bl.dao.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.bl.dao.IDemandeOuvertureDAO;
import com.bl.model.DemandeOuvertureCompte;

@Component
public class DemandeOuvertureDAOImpl implements IDemandeOuvertureDAO {
	static HashMap<Long, DemandeOuvertureCompte> demOuvMap = new HashMap<Long, DemandeOuvertureCompte>();
	
//	public DemandeOuvertureDAOImpl() {
//		DemandeOuvertureCompte dem = new DemandeOuvertureCompte();
//		dem.setId(0L);
//		demOuvMap.put(0L, dem);
//	}
	
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
		Long id = dem.getId();
		demOuvMap.put(id, dem);
		return demOuvMap.get(id);
	}

	@Override
	public DemandeOuvertureCompte getDemandeById(Long id) {
		DemandeOuvertureCompte dem = demOuvMap.get(id);
		return dem;
	}

}
