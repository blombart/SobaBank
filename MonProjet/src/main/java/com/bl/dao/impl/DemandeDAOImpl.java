package com.bl.dao.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.bl.dao.AbstractDao;
import com.bl.dao.IDemandeDAO;
import com.bl.model.Agent;
import com.bl.model.Client;
import com.bl.model.Demande;
import com.bl.model.DemandeChequier;

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

	@Override
	public List<DemandeChequier> getAllDemandesChequierByIdAgent(Long idAgent) {
		
//		List<DemandeChequier> demandes = getEntityManager().createNativeQuery("select demande.type_demande, demande.id, demande.dateDemande, demande.libelle, demande.status, demande.newCompte_id from Demande "
//				+ "join user_demande on demande.id = user_demande.demandes_id "
//				+ "join user on user.id = user_demande.user_id "
//				+ "join user_user on user.id = user_user.agents_id "
//				+ "where user_user.agents_id = ?1").setParameter("1", idAgent).getResultList();
		
//		Agent agent = (Agent) getEntityManager().createQuery("select c from DemandeChequier c ").getSingleResult();
//		
//		ArrayList<Client> clients = new ArrayList<Client>();
		
		@SuppressWarnings("unchecked")
		List<Object> results = getEntityManager().createNativeQuery("select dem.id from demande dem where dem.id in "
				+ "( select demandes_id from user_demande where user_id in (select clients_id from user_user where user_id =? )) "
				+ "and type_demande= 'chequier' ").setParameter(1, idAgent).getResultList();
		List<DemandeChequier> chequiers = new ArrayList<DemandeChequier>();
		for(Object o : results){
			DemandeChequier cheque = (DemandeChequier)getByKey(Long.parseLong(o.toString()));
			chequiers.add(cheque);
 		}
		
		return chequiers;
	}	
	

}
