package com.bl.dao;

import java.util.List;

import com.bl.model.Client;

public interface IClientDAO {
	public List<Client> getAllClients();
	
	public Client createClient(Client client);
	
	public Client updateClient(Client client);
	
	public void deleteClient(Long id);
	
	public Client GetClientById(Long id);
}
