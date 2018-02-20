package com.bl.dao.impl;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.bl.dao.IClientDAO;
import com.bl.model.Client;
import com.bl.model.Compte;
import com.bl.model.Demande;

@Component
public class ClientDAOImpl implements IClientDAO{
	static HashMap<Long, Client> clientsMap = new HashMap<Long, Client>();
	static int cpt;
	
//	public ClientDAOImpl(){
//		Client c1 = new Client("Lille","0321546598",3,"marié",null,null,null,null,true);
//		c1.setId(1); c1.setNom("STA"); c1.setPrenom("Omar"); c1.setMdp("1234"); c1.setRole("client");
//		c1.setComptes(new ArrayList<Compte>()); c1.setDemandes(new ArrayList<Demande>()); c1.setFiles(new ArrayList<File>());
//		
//		createClient(c1);
//		
//	}
	
	
	
	@Override
	public List<Client> getAllClients() {
		List<Client> clients = new ArrayList<Client>(clientsMap.values());
		return clients;
	}

	@Override
	public Client createClient(Client client) {
		cpt = clientsMap.size();
		cpt++;
		long id = client.getId() + (cpt);
		client.setId(id);
		client.setComptes(new ArrayList<Compte>());
		client.setDemandes(new ArrayList<Demande>());
		client.setFiles(new ArrayList<File>());
		System.out.println("nom :" + client.getNom());
		clientsMap.put(id, client);
		return clientsMap.get(id);
	}


	@Override
	public Client updateClient(Client client) {
		Long id = client.getId();
		clientsMap.put(id, client);
		return clientsMap.get(id);
	}

	@Override
	public void deleteClient(Long id) {
		clientsMap.remove(id);
		
	}

	@Override
	public Client GetClientById(Long id) {
		Client client = clientsMap.get(id);
		return client;
	}
	
	

}
