package com.bl.dao.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import com.bl.dao.ICompteDAO;
import com.bl.model.Compte;

public class CompteDAOImpl implements ICompteDAO{
	static HashMap<Long, Compte> comptesMap = new HashMap<Long, Compte>();
	
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
