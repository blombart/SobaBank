package com.bl.test;

import java.util.Date;
import java.util.List;

import com.bl.dao.IDemandeDAO;
import com.bl.dao.impl.DemandeDAOImpl;
import com.bl.model.Demande;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
	IDemandeDAO dao = new DemandeDAOImpl();
	Demande dem = new Demande(0L, new Date(), "chequier", "non traitee", false);
	Demande dem1 = new Demande(1L, new Date(), "mdp", "non traitee", false);
	
	dao.addDemande(dem);dao.addDemande(dem1);
	
	List<Demande> demandes = dao.getAllDemande();
	
	for(Demande dema : demandes) {
		System.out.println(dema.getLibelle());
	}
	
	dem1.setLibelle("finalement non");
	dao.updateDemande(dem1);
	
	for(Demande dema : demandes) {
		System.out.println(dema.getLibelle());
	}
		
	}

}
