package com.bl.dao.impl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Repository;

import com.bl.dao.AbstractDao;
import com.bl.dao.IDemandeDAO;
import com.bl.model.Demande;
import com.bl.model.DemandeChequier;
import com.bl.model.DemandeNouveauCompte;


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
	public Set<Demande> getAllDemande() {
		@SuppressWarnings("unchecked")
		Set<Demande> demandes = (Set<Demande>) getEntityManager().createQuery("select dem from Demande dem").getResultList();
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
	public Set<DemandeChequier> getAllDemandesChequierByIdAgent(Long idAgent) {
		
		
		@SuppressWarnings("unchecked")
		List<Object> results = getEntityManager().createNativeQuery("select dem.id from demande dem where dem.id in "
				+ "( select demandes_id from user_demande where user_id in (select clients_id from user_user where user_id =? )) "
				+ "and type_demande= 'chequier' ").setParameter(1, idAgent).getResultList();
		Set<DemandeChequier> chequiers = new HashSet<DemandeChequier>();
		for(Object o : results){
			DemandeChequier cheque = (DemandeChequier)getByKey(Long.parseLong(o.toString()));
			chequiers.add(cheque);
 		}
		
		return chequiers;
	}	
	
	public Set<DemandeNouveauCompte> getDemandeByIdAgent(Long idAgent){
		@SuppressWarnings("unchecked")
				List<Object> results = getEntityManager().createNativeQuery("select dem.id from demande dem where dem.id in "
						+ "( select demandes_id from user_demande where user_id in (select clients_id from user_user where user_id =? )) "
						+ "and type_demande= 'nouveauCompte' ").setParameter(1, idAgent).getResultList();
				Set<DemandeNouveauCompte> comptes = new HashSet<DemandeNouveauCompte>();
				for(Object o : results){
					DemandeNouveauCompte compte = (DemandeNouveauCompte)getByKey(Long.parseLong(o.toString()));
					comptes.add(compte);
		 		}
				
				return comptes;
		
	}

}
