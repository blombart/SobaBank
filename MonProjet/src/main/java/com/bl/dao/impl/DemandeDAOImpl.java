package com.bl.dao.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.bl.dao.AbstractDao;
import com.bl.dao.IDemandeDAO;
import com.bl.model.Demande;

@Repository("demandeDao")
public class DemandeDAOImpl extends AbstractDao<Long, Demande> implements IDemandeDAO{
//	static HashMap<Long, Demande> demandesMap = new HashMap<Long, Demande>();
//	
//	@Override
//	public List<Demande> getAllDemande() {
//		List<Demande> demandes = new ArrayList<Demande>(demandesMap.values());
//		return demandes;
//	}
//
//	@Override
//	public Demande addDemande(Demande dem) {
//		Long id = dem.getId();
//		demandesMap.put(id, dem);
//		return demandesMap.get(id);
//	}
//
//	@Override
//	public Demande updateDemande(Demande dem) {
//		Long id = dem.getId();
//		demandesMap.put(id, dem);
//		return demandesMap.get(id);
//	}
//
//	@Override
//	public void deleteDemande(Long id) {
//		demandesMap.remove(id);
//	}
//
//	@Override
//	public Demande getDemandeById(Long id) {
//		Demande demande = demandesMap.get(id);
//		return demande;
//	}
	@Override
	public List<Demande> getAllDemande() {
		@SuppressWarnings("unchecked")
		List<Demande> demandes = getEntityManager().createQuery("select dem from Demande dem").getResultList();
		return demandes;
	}

	@Override
	public Demande addDemande(Demande dem) {
		persist(dem);
		return getByReference(dem.getId());
	}

	@Override
	public Demande updateDemande(Demande dem) {
		persist(dem);
		return getByReference(dem.getId());
	}

	@Override
	public void deleteDemande(Long id) {
		Demande dem = getByReference(id);
		delete(dem);
	}

	@Override
	public Demande getDemandeById(Long id) {
		Demande demande =getByKey(id);
		return demande;
	}	
	

}
