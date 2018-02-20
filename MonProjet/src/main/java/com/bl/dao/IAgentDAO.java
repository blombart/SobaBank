package com.bl.dao;

import java.util.List;

import com.bl.model.Agent;

public interface IAgentDAO {
	public List<Agent> getAllAgents();
	
	public Agent addAgent(Agent agent);
	
	public Agent updateAgent(Agent agent);
	
	public void deleteAgent(Long id);
	
	public Agent getAgentById(Long id);
	
	public Agent getAgentByMatricule(String matricule);
}
