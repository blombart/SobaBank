package com.bl.dao.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.bl.dao.IDemandeDAO;
import com.bl.model.Demande;

public class DemandeDAOImpl implements IDemandeDAO{
	static HashMap<Long, Demande> demandesMap = new HashMap<Long, Demande>();
	
	@Override
	public List<Demande> getAllDemande() {
		List<Demande> demandes = new ArrayList<Demande>(demandesMap.values());
		return demandes;
	}

	@Override
	public Demande addDemande(Demande dem) {
		Long id = dem.getId();
		demandesMap.put(id, dem);
		return demandesMap.get(id);
	}

	@Override
	public Demande updateDemande(Demande dem) {
		Long id = dem.getId();
		demandesMap.put(id, dem);
		return demandesMap.get(id);
	}

	@Override
	public void deleteDemande(Long id) {
		demandesMap.remove(id);
	}

	@Override
	public Demande getDemandeById(Long id) {
		Demande demande = demandesMap.get(id);
		return demande;
	}
	
	

}
