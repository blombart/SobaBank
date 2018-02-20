package com.bl.dao.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Component;

import com.bl.dao.AbstractDao;
import com.bl.dao.ICompteDAO;
import com.bl.model.Compte;
import com.bl.model.CompteEpargne;
import com.bl.model.Operation;

@Component
public class CompteDAOImpl extends AbstractDao<Long, Compte> implements ICompteDAO{
//	static HashMap<Long, Compte> comptesMap = new HashMap<Long, Compte>();
//	
//	public CompteDAOImpl(){
//		Compte c1 = new Compte(1L, 1, new Date(), 200, "123", 200, 10, null);
//		c1.setOperations(new ArrayList<Operation>());
//	
//
//		Compte c2 = new Compte(2L, 2, new Date(), 300, "123", 200, 10, null);
//		c2.setOperations(new ArrayList<Operation>());
//		
//		
//		CompteEpargne c3 = new CompteEpargne(3L, 3, new Date(), 500, "123", 200, 10, null);
//		c3.setOperations(new ArrayList<Operation>()); c3.setTauxInteret(10);c3.setMontantRemu(100);
//		
//		addCompte(c1);
//		addCompte(c2);
//		addCompte(c3);
//	}
//	
//	@Override
//	public List<Compte> getAllComptes() {
//		List<Compte> comptes = new ArrayList<Compte>(comptesMap.values());
//		return comptes;
//	}
//
//	@Override
//	public Compte addCompte(Compte compte) {
//		Long id = compte.getId();
//		comptesMap.put(id, compte);
//		return comptesMap.get(id);
//	}
//
//	@Override
//	public Compte updateCompte(Compte compte) {
//		Long id = compte.getId();
//		comptesMap.put(id, compte);
//		return comptesMap.get(id);
//	}
//
//	@Override
//	public Compte getCompteByID(Long id) {
//		Compte compte = comptesMap.get(id);
//		return compte;
//	}
//
//	@Override
//	public Compte getCompteByRIB(String rib) {
//		Compte compte = null;
//		
//		Set<Long> keys = comptesMap.keySet();
//		Iterator<Long> it = keys.iterator();
//		
//		while(it.hasNext()){
//			Long id = it.next();
//			if(rib == comptesMap.get(id).getRib()){
//				compte = comptesMap.get(id);
//			}
//		}
//		
//		return compte;
//	}
	
	@Override
	public List<Compte> getAllComptes() {
		@SuppressWarnings("unchecked")
		List<Compte> comptes = getEntityManager().createQuery("select cpt from Compte cpt").getResultList();
		return comptes;
	}

	@Override
	public Compte addCompte(Compte compte) {
		persist(compte);
		return getByReference(compte.getId());
	}

	@Override
	public Compte updateCompte(Compte compte) {
		persist(compte);
		return getByReference(compte.getId());
	}

	@Override
	public Compte getCompteByID(Long id) {
		Compte compte = getByKey(id);
		return compte;
	}

	@Override
	public Compte getCompteByRIB(String rib) {
		Compte compte = (Compte) getEntityManager().createQuery("select cpt from Compte cpt where cpt.rib=?")
				.setParameter(1, rib);
		return compte;
	}
}
