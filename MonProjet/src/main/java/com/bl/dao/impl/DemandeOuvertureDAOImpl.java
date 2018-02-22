package com.bl.dao.impl;

import java.util.HashSet;
import java.util.Set;

import org.springframework.stereotype.Repository;

import com.bl.dao.AbstractDao;
import com.bl.dao.IDemandeOuvertureDAO;
import com.bl.model.DemandeOuvertureCompte;

@Repository("demandeOuvertureDao")
public class DemandeOuvertureDAOImpl extends AbstractDao<Long, DemandeOuvertureCompte> implements IDemandeOuvertureDAO {
//	static HashMap<Long, DemandeOuvertureCompte> demOuvMap = new HashMap<Long, DemandeOuvertureCompte>();
//	static int cpt;
//	public DemandeOuvertureDAOImpl() {
//		Client c1 = new Client("Lille","0321546598",3,"mari�",null,null,null,null,true);
//		c1.setId(1); c1.setNom("dupont"); c1.setPrenom("toto"); c1.setMdp("azerty"); c1.setRole("client"); c1.setIsClient(false);
//		c1.setComptes(new ArrayList<Compte>()); c1.setDemandes(new ArrayList<Demande>()); c1.setFiles(new ArrayList<File>());
//		
//		DemandeOuvertureCompte dem = new DemandeOuvertureCompte();
//		dem.setId(1L); dem.setDateDemande(new Date());dem.setIsAffected(false);
//		dem.setClient(c1);dem.setIdAgent(null);
//		demOuvMap.put(dem.getId(), dem);
//	}
	
//	@Override
//	public List<DemandeOuvertureCompte> getAllDemande() {
//		List<DemandeOuvertureCompte> demOuv = new ArrayList<DemandeOuvertureCompte>(demOuvMap.values());
//		return demOuv;
//	}
//
//	@Override
//	public DemandeOuvertureCompte addDemande(DemandeOuvertureCompte dem) {
//		cpt = demOuvMap.size();
//		cpt++;
//		long id = dem.getId() + (cpt);
//		dem.setId(id);
//		demOuvMap.put(id, dem);
//		return demOuvMap.get(id);
//	}
//
//	@Override
//	public DemandeOuvertureCompte updateDemande(DemandeOuvertureCompte dem) {
//		Long id = dem.getId();
//		demOuvMap.put(id, dem);
//		DemandeOuvertureCompte _dem = demOuvMap.get(id);
//		return _dem;
//	}
//
//	@Override
//	public DemandeOuvertureCompte getDemandeById(Long id) {
//		DemandeOuvertureCompte dem = demOuvMap.get(id);
//		return dem;
//	}

	@Override
	public Set<DemandeOuvertureCompte> getAllDemande() {
		@SuppressWarnings("unchecked")
		Set<DemandeOuvertureCompte> demOuv = new HashSet<DemandeOuvertureCompte>(getEntityManager().createQuery("select dem from DemandeOuvertureCompte dem").getResultList());
		return demOuv;
	}

	@Override
	public DemandeOuvertureCompte addDemande(DemandeOuvertureCompte dem) {
		persist(dem);
		return getByReference(dem.getId());
	}

	@Override
	public DemandeOuvertureCompte updateDemande(DemandeOuvertureCompte dem) {
		persist(dem);
		return getByReference(dem.getId());
	}

	@Override
	public DemandeOuvertureCompte getDemandeById(Long id) {
		DemandeOuvertureCompte dem = getByKey(id);
		return dem;
	}

}
