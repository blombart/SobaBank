package com.bl.service;

import java.util.List;

import com.bl.model.Agent;

public interface IAdminService {
	public List<Agent> getAllAgent();
	
	public Agent updateAgent(Agent agent);
	
	public void deleteAgent(Long id);
	
	
}
