package com.bl.service.impl;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bl.dao.IClientDAO;
import com.bl.dao.ICompteDAO;
import com.bl.model.Client;
import com.bl.model.Compte;
import com.bl.model.Operation;
import com.bl.service.IClientService;

@Component
public class ClientServiceImpl implements IClientService {
	@Autowired
	private IClientDAO clientDAO;
	@Autowired
	private ICompteDAO compteDAO;

	@Override
	public Client createClient(Client client) {
		Client cl = clientDAO.createClient(client);
		return cl;
	}

	@Override
	public List<Compte> getComptesByIdClient(Long idClient) {
		//on recupere le client
		Client cl = clientDAO.GetClientById(idClient);
		
		//On ajoute les comptes du client dans une liste
		List<Compte> comptes = cl.getComptes();
		return comptes;
	}

	@Override
	public List<Operation> getOperationsByCompte(Long idCompte) {
		Compte cp = compteDAO.getCompteByID(idCompte);
		List<Operation> operations = cp.getOperations();
		return operations;
	}

	@Override
	public Compte getCompte(Long idCompte) {
		Compte cp = compteDAO.getCompteByID(idCompte);
		return cp;
	}

	@SuppressWarnings("deprecation")
	@Override
	public List<Operation> getOperationFilteredByCompte(Long idCompte, int mois) {
		Compte cp = compteDAO.getCompteByID(idCompte);
		List<Operation> opes = cp.getOperations();
		List<Operation> opesFiltered = new ArrayList<Operation>();
		for(Operation ope : opes){
			if(ope.getDate().getMonth() == mois){
				opesFiltered.add(ope);
			}
		}
		
		return opesFiltered;
	}
	
	

}
