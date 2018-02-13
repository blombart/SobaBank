package com.bl.dao.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.bl.dao.IClientDAO;
import com.bl.model.Client;
import com.bl.model.User;

public class ClientDAOImpl implements IClientDAO{
	
	
	static HashMap<Long, Client> clientsMap = new HashMap<Long, Client>();
	
	
	public ClientDAOImpl() {
		Client client1 = new Client("Hadjaz","Abderrahmane",0,"Celibataire",null,null, null, null,true);
		Client client2 = new Client("Lombart","Benjamin",10,"Marié",null,null, null, null,true);
		Client client3 = new Client("Omar","Sta",1,"Celibataire",null,null, null, null,true);
		Client client4 = new Client("Seb","Astien",2,"Marié",null,null, null, null,true);
		Client client5 = new Client("Gui","LLaume",4,"Pacsé",null,null, null, null,true);
		
		clientsMap.put(1L, client1);
		clientsMap.put(2L, client2);
		clientsMap.put(3L, client3);
		clientsMap.put(4L, client4);
		clientsMap.put(5L, client5);
		
		
		//cpt = usersMap.size();
	}
	
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
