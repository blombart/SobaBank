package com.bl.dao;

import java.util.Set;

import com.bl.model.Agent;

public interface IAgentDAO {
	public Set<Agent> getAllAgents();
	
	public Agent addAgent(Agent agent);
	
	public Agent updateAgent(Agent agent);
	
	public void deleteAgent(Long id);
	
	public Agent getAgentById(Long id);
	
	public Agent getAgentByMatricule(String matricule);
	
	Agent getAgentByDem(Long id);
}
