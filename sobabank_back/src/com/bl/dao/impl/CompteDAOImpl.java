package com.bl.dao.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import com.bl.dao.ICompteDAO;
import com.bl.model.Client;
import com.bl.model.Compte;

public class CompteDAOImpl implements ICompteDAO{
	static HashMap<Long, Compte> comptesMap = new HashMap<Long, Compte>();
	
	
	
	public CompteDAOImpl() {
		Compte compte1 = new Compte(0L, 123, new Date(), 1000F,"156454645", 500F, 2.5F, null);
		Compte compte2 = new Compte(1L, 456, new Date(), 2000F,"15656454545", 800F, 1.5F, null);
		Compte compte3 = new Compte(2L, 789, new Date(), 5000F,"257894645", 1000F, 2.5F, null);
		
		comptesMap.put(0L, compte1);
		comptesMap.put(1L, compte2);
		comptesMap.put(2L, compte3);
		
		
		//cpt = usersMap.size();
	}
	
	@Override
	public List<Compte> getAllComptes() {
		List<Compte> comptes = new ArrayList<Compte>(comptesMap.values());
		return comptes;
	}

	@Override
	public Compte addCompte(Compte compte) {
		Long id = compte.getId();
		comptesMap.put(id, compte);
		return comptesMap.get(id);
	}

	@Override
	public Compte updateCompte(Compte compte) {
		Long id = compte.getId();
		comptesMap.put(id, compte);
		return comptesMap.get(id);
	}

	@Override
	public Compte getCompteByID(Long id) {
		Compte compte = comptesMap.get(id);
		return compte;
	}

	@Override
	public Compte getCompteByRIB(String rib) {
		Compte compte = null;
		
		Set<Long> keys = comptesMap.keySet();
		Iterator<Long> it = keys.iterator();
		
		while(it.hasNext()){
			Long id = it.next();
			if(rib == comptesMap.get(id).getRib()){
				compte = comptesMap.get(id);
			}
		}
		
		return compte;
	}

}
