package com.bl.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.bl.model.Agent;

public class AgentDAOImpl implements IAgentDAO{
	static HashMap<Long, Agent> agentsMap = new HashMap<Long, Agent>();
	
	
	@Override
	public List<Agent> getAllAgents() {
		List<Agent> agents = new ArrayList<Agent>(agentsMap.values());
		return agents;
	}

	@Override
	public Agent addAgent(Agent agent) {
		Long id = agent.getId();
		agentsMap.put(id, agent);
		return agentsMap.get(id);
	}

	@Override
	public Agent updateAgent(Agent agent) {
		if(agentsMap.get(agent.getId()) != null){
			agentsMap.get(agent.getId()).setEmail(agent.getEmail());
			agentsMap.get(agent.getId()).setMatricule(agent.getMatricule());
			agentsMap.get(agent.getId()).setMdp(agent.getMdp());
			agentsMap.get(agent.getId()).setNom(agent.getNom());
			agentsMap.get(agent.getId()).setPrenom(agent.getPrenom());
			agentsMap.get(agent.getId()).setNumTel(agent.getNumTel());
			agentsMap.get(agent.getId()).setClients(agent.getClients());
		}else{
			agentsMap.put(agent.getId(), agent);
		}
		return agentsMap.get(agent.getId());
	}

	@Override
	public void deleteAgent(Long id) {
		agentsMap.remove(id);
	}

	@Override
	public Agent getAgentById(Long id) {
		Agent agent = agentsMap.get(id);
		return agent;
	}


}
