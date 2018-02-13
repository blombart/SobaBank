package com.bl.dao.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import com.bl.dao.IAgentDAO;
import com.bl.model.Agent;
import com.bl.model.DemandeOuvertureCompte;

public class AgentDAOImpl implements IAgentDAO{
	static HashMap<Long, Agent> agentsMap = new HashMap<Long, Agent>();
	
	public AgentDAOImpl() {
		Agent agent = new Agent();
		agent.setId(0L);
		agent.setNom("Lionel");
		agent.setPrenom("Dupont");
		
		Agent agent2 = new Agent();
		
		agent2.setId(1L);
		agent2.setNom("Cedric");
		agent2.setPrenom("Duponchel");
		
		agentsMap.put(0L, agent);
		agentsMap.put(1L, agent2);
	}
	
	@Override
	public List<Agent> getAllAgents() {
		List<Agent> agents = new ArrayList<Agent>(agentsMap.values());
		return agents;
	}

	@Override
	public Agent addAgent(Agent agent) {
		Long id = agent.getId();
		agent.setDemandesOuverture(new ArrayList<DemandeOuvertureCompte>());
		
		agentsMap.put(id, agent);
		return agentsMap.get(id);
	}

	@Override
	public Agent updateAgent(Agent agent) {
		Long id = agent.getId();
		agentsMap.put(id, agent);
		return agentsMap.get(id);
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

	@Override
	public Agent getAgentByMatricule(String matricule) {
		Agent agent = null;
		
		Set<Long> keys = agentsMap.keySet();
		Iterator<Long> it = keys.iterator();
		
		while(it.hasNext()){
			Long id = it.next();
			if(matricule == agentsMap.get(id).getMatricule()){
				agent = agentsMap.get(id);
			}
		}
		
		return agent;
	}


}
