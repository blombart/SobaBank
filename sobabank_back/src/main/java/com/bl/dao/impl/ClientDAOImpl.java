package com.bl.dao.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.bl.dao.IClientDAO;
import com.bl.model.Client;

@Component
public class ClientDAOImpl implements IClientDAO{
	static HashMap<Long, Client> clientsMap = new HashMap<Long, Client>();
	
	@Override
	public List<Client> getAllClients() {
		List<Client> clients = new ArrayList<Client>(clientsMap.values());
		return clients;
	}

	@Override
	public Client createClient(Client client) {
		Long id = client.getId();
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
