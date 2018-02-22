package com.bl.dao.impl;

import java.util.HashSet;
import java.util.Set;

import org.springframework.stereotype.Repository;

import com.bl.dao.AbstractDao;
import com.bl.dao.IClientDAO;
import com.bl.model.Client;

@Repository("clientDao")
public class ClientDAOImpl extends AbstractDao< Long, Client> implements IClientDAO{
//	static HashMap<Long, Client> clientsMap = new HashMap<Long, Client>();
//	static int cpt;
	
//	public ClientDAOImpl(){
//		Client c1 = new Client("Lille","0321546598",3,"mari�",null,null,null,null,true);
//		c1.setId(1); c1.setNom("STA"); c1.setPrenom("Omar"); c1.setMdp("1234"); c1.setRole("client");
//		c1.setComptes(new ArrayList<Compte>()); c1.setDemandes(new ArrayList<Demande>()); c1.setFiles(new ArrayList<File>());
//		
//		createClient(c1);
//		
//	}
	
	
	
//	@Override
//	public List<Client> getAllClients() {
//		List<Client> clients = new ArrayList<Client>(clientsMap.values());
//		return clients;
//	}
//
//	@Override
//	public Client createClient(Client client) {
//		cpt = clientsMap.size();
//		cpt++;
//		long id = client.getId() + (cpt);
//		client.setId(id);
//		client.setComptes(new ArrayList<Compte>());
//		client.setDemandes(new ArrayList<Demande>());
//		client.setFiles(new ArrayList<File>());
//		System.out.println("nom :" + client.getNom());
//		clientsMap.put(id, client);
//		return clientsMap.get(id);
//	}
//
//
//	@Override
//	public Client updateClient(Client client) {
//		Long id = client.getId();
//		clientsMap.put(id, client);
//		return clientsMap.get(id);
//	}
//
//	@Override
//	public void deleteClient(Long id) {
//		clientsMap.remove(id);
//		
//	}
//
//	@Override
//	public Client GetClientById(Long id) {
//		Client client = clientsMap.get(id);
//		return client;
//	}
	
	@Override
	public Set<Client> getAllClients() {
		@SuppressWarnings("unchecked")
		Set<Client> clients = new HashSet<Client>(getEntityManager().createQuery("select c from client c").getResultList());
		return clients;
	}

	@Override
	public Client createClient(Client client) {
		persist(client);
		return getByReference(client.getId());
	}


	@Override
	public Client updateClient(Client client) {
		persist(client);
		return getByReference(client.getId());
	}

	@Override
	public void deleteClient(Long id) {
		Client client = getByReference(id);
		delete(client);
	}

	@Override
	public Client GetClientById(Long id) {
		Client client = getByKey(id);
		return client;
	}
	
	

}
