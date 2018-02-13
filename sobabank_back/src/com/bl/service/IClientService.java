package com.bl.service;

import java.util.List;

import com.bl.model.Client;
import com.bl.model.Compte;
import com.bl.model.Operation;

public interface IClientService {
	public Client createClient(Client client);
	
	public List<Compte> getComptesByIdClient(Long idClient);
	
	public List<Operation> getOperationsByCompte(Long idCompte);
	
	public Compte getCompte(Long idCompte);
	
	public List<Operation> getOperationFilteredByCompte(Long idCompte, int mois);
}
