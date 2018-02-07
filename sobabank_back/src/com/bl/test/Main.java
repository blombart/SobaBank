package com.bl.test;

import java.util.Date;

import com.bl.dao.IDemandeOuvertureDAO;
import com.bl.dao.impl.DemandeOuvertureDAOImpl;
import com.bl.model.Agent;
import com.bl.model.DemandeOuvertureCompte;
import com.bl.service.IAdminService;
import com.bl.service.impl.AdminServiceImpl;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		IAdminService adminServ = new AdminServiceImpl();
		IDemandeOuvertureDAO demDAO = new DemandeOuvertureDAOImpl();
		
		Agent agent = new Agent(new Date());
		agent.setId(0L);
		agent.setMatricule("A001");
		
		DemandeOuvertureCompte dem = new DemandeOuvertureCompte();
		dem.setDateDemande(new Date());
		dem.setId(0L);
		

		adminServ.addAgent(agent);
		demDAO.addDemande(dem);
		adminServ.affecterDemande(0L, 0L);
		
	}

}
