package com.bl.service.impl;

import java.util.List;

import com.bl.dao.IAgentDAO;
import com.bl.dao.impl.AgentDAOImpl;
import com.bl.model.Agent;
import com.bl.service.IAdminService;

public class AdminServiceImpl implements IAdminService {
	private IAgentDAO agentDAO = new AgentDAOImpl();
	
	@Override
	public List<Agent> getAllAgent() {
		List<Agent> agents = agentDAO.getAllAgents();
		return agents;
	}

	@Override
	public Agent updateAgent(Agent agent) {
		Agent _agent = agentDAO.updateAgent(agent);
		return _agent;
	}

	@Override
	public void deleteAgent(Long id) {
		Agent _agent = agentDAO.getAgentById(id);
		if (_agent.getClients().length == 0){
			agentDAO.deleteAgent(id);
		}else{
			System.out.println("Impossible de supprimer l'agent");
		}
	}

}
